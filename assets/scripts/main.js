require(['gitbook', 'jquery'], function (gitbook, $) {
  var CONTENT_CONTAINER = '.body-inner';
  var currentPath = getPathFromLocation();
  var currentHash = getHashFromLocation();
  var isFF = /firefox/i.test(navigator.userAgent);

  // Storing a new hash in a variable on link click
  $(document).on('click', 'a[href]', function () {
    handleUrlChange(this.pathname, this.hash.slice(1));
  });

  // Storing a new hash in a variable on "back/forward" navigations
  window.addEventListener('popstate', function () {
    handleUrlChange(getPathFromLocation(), getHashFromLocation());
  });

  // Firefox doesn't fire 'popstate' when hash changes
  if (isFF) {
    window.addEventListener('hashchange', function () {
      handleUrlChange(getPathFromLocation(), getHashFromLocation());
    });
  }

  gitbook.events.on('page.change', function () {
    // Should do it on `page.change` because buttons are being redrawn on every page change for some reason
    updateToolbarButtons();

    // Adding anchor icons next to markdown headers
    addHeaderLinks();

    var contentContainer = document.querySelector(CONTENT_CONTAINER);

    if (contentContainer) {
      // GitBook automatically scrolls content to the anchor from the URL with animation.
      // The bad thing is it scrolls to the wrong position and there is no straight way to disable it.
      // This ugly hack is the only solution I've found: it removes the class that is used by GitBook to find
      // scroll target and returns it back on the next tick.
      contentContainer.classList.remove('body-inner');
      setTimeout(function () {
        contentContainer.classList.add('body-inner');

        if (currentHash) {
          // Without build-in scroll animation GitBook doesn't update the URL with the new hash so we
          // have to do it manually.
          history.replaceState(null, document.title, location.pathname + location.search + '#' + currentHash);

          // We should wait for the images to load or page will be scrolled to the wrong position.
          setTimeout(updatePageScroll, 100);
        }
      });
    }
  });

  function updatePageScroll() {
    var scrollToElem = $(document.getElementById(currentHash));
    var scrollTop = scrollToElem.length ? scrollToElem.position().top : 0;
    $(CONTENT_CONTAINER).scrollTop(scrollTop);
  }

  function getPathFromLocation() {
    return location.pathname;
  }

  function getHashFromLocation() {
    return location.hash.slice(1);
  }

  function handleUrlChange(path, hash) {
    // GitBook doesn't automatically scroll to the new anchor in Firefox
    var needScrollUpdate = (isFF && path === currentPath && hash !== currentHash);

    currentPath = path;
    currentHash = hash;

    if (needScrollUpdate) {
      updatePageScroll();
    }
  }

  function updateToolbarButtons() {
    // `Menu` button
    $('.book-header .btn:has(.fa-align-justify)')
      .addClass('btn_menu');

    // `Edit This Page` button
    $('.book-header .btn:has(.fa-edit)')
      .addClass('btn_edit')
      // Changing icon
      .find('.fa-edit')
      .removeClass('fa-edit')
      .addClass('fa-github');
  }

  function addHeaderLinks() {
    $('.markdown-section')
      .find('h1, h2, h3, h4, h5')
      .filter(function () {
        return this.getAttribute("id");
      })
      .addClass('heading heading_linkable')
      .prepend(function () {
        return (
          '<a class="heading__anchor" ' +
            'href="#' + this.getAttribute('id') + '">' +
            '<i class="fa fa-link"></i>' +
          '</a>'
        );
      });
  }
});
