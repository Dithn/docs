module.exports = [
  ['/', 'Introduction'],
  ['/product-notifications', 'Product notifications'],
  ['/workato-concepts', 'Concepts'],
  ['/connections', 'Connecting apps'],
  {
    title: 'Building recipes',
    path: '/recipes/building-recipes',
    children: [
      {
        title: 'Triggers',
        path: '/recipes/triggers',
        children: [
          ['/recipes/triggers#polling-triggers', 'Polling triggers'],
          [
            '/recipes/triggers#real-time-triggers',
            'Real-time triggers'
          ],
          [
            '/recipes/triggers#scheduled-triggers',
            'Scheduled triggers'
          ],
          ['/recipes/triggers#single-triggers', 'Single triggers'],
          ['/recipes/triggers#batch-triggers', 'Batch triggers'],
          ['/recipes/triggers#since-from', 'Since/from'],
          [
            '/recipes/triggers#trigger-conditions',
            'Trigger conditions'
          ]
        ]
      },
      {
        title: 'Steps',
        path: '/recipes/steps',
        children: [
          ['/recipes/steps#action-step', 'Action step'],
          [
            '/recipes/steps#conditional-action-step',
            'Conditional step'
          ],
          ['/recipes/steps#repeat-step', 'Repeat step'],
          ['/recipes/steps#call-recipe-step', 'Call recipe step'],
          ['/recipes/steps#stop-step', 'Stop step'],
          [
            '/recipes/steps#action-with-error-handler-step',
            'Action with error handler step'
          ]
        ]
      },
      {
        title: 'Actions',
        path: '/recipes/actions',
        children: [
          ['/recipes/actions#create', 'Create action'],
          ['/recipes/actions#update', 'Update action'],
          ['/recipes/actions#search', 'Search action'],
          ['/recipes/actions#get', 'Get action'],
          ['/recipes/actions#upsert', 'Upsert action'],
          ['/recipes/actions#delete', 'Delete action']
        ]
      },
      ['/features/if-conditions', 'IF conditions'],
      {
        title: 'Data pills and mapping',
        path: '/recipes/data-pills-and-mapping',
        children: [
          [
            '/recipes/data-pills-and-mapping#data-types',
            'Data types'
          ],
          [
            '/recipes/data-pills-and-mapping#type-conversions',
            'Type conversion'
          ],
          [
            '/recipes/data-pills-and-mapping#preview-data',
            'Preview data'
          ],
          [
            '/recipes/data-pills-and-mapping#fields-mapping',
            'Fields mapping'
          ],
          ['/recipes/group-data-mapping', 'Group data mapping'],
          [
            '/recipes/data-pills-and-mapping#data-transformation',
            'Data transformation'
          ]
        ]
      },
      [
        '/recipes/best-practices-building',
        'Recipe building best practices'
      ],
      [
        '/recipes/recipe-security',
        'Security best practices for recipes'
      ],
      [
        '/recipes/best-practices-error-handling',
        'Error handling best practices'
      ],
      ['/recipes/version-management', 'Version management']
    ]
  },
  {
    title: 'Running recipes',
    path: '/recipes/running-recipes',
    children: [
      {
        title: 'Test, start and stop recipe',
        path: '/recipes/start-and-stop',
        children: [
          ['/recipes/start-and-stop#test-mode', 'Test mode'],
          ['/recipes/start-and-stop#start-recipe', 'Start recipe'],
          ['/recipes/start-and-stop#stop-recipe', 'Stop recipe']
        ]
      },
      {
        title: 'Jobs',
        path: '/recipes/jobs',
        children: [
          ['/recipes/jobs#jobs-report', 'Jobs report'],
          ['/recipes/jobs#custom-report', 'Custom jobs report'],
          ['/recipes/jobs#job-status', 'Job status'],
          ['/recipes/jobs#job-details', 'Job details screen'],
          ['/recipes/jobs#rerun-jobs', 'Rerun jobs']
        ]
      },
      ['/recipes/tasks', 'Tasks'],
      {
        title: 'Rerun job',
        path: '/recipes/rerun-job',
        children: [
          [
            '/recipes/rerun-job#cached-trigger-data-in-job-reruns',
            'Cached trigger data'
          ],
          [
            '/recipes/rerun-job#job-rerun-history',
            'Job rerun history'
          ],
          [
            '/recipes/rerun-job#common-scenarios-for-rerunning-jobs',
            'Common scenarios for rerunning jobs'
          ]
        ]
      },
      {
        title: 'Cancel job',
        path: '/recipes/cancel-job'
      },
      {
        title: 'RecipeOps',
        path: '/recipe-ops',
        children: [
          ['/recipe-ops#connection', 'Connection setup'],
          [
            '/recipe-ops#new-failed-job-trigger',
            'New failed job trigger'
          ],
          [
            '/recipe-ops#recipe-stopped-by-workato-trigger',
            'Recipe stopped by Workato trigger'
          ],
          [
            '/recipe-ops#get-account-details-action',
            'Get account details action'
          ],
          [
            '/recipe-ops#get-recipe-details-action',
            'Get recipe details action'
          ],
          ['/recipe-ops#list-recipes-action', 'List recipes action'],
          ['/recipe-ops#start-recipe-action', 'Start recipe action'],
          ['/recipe-ops#stop-recipe-action', 'Stop recipe action']
        ]
      }
    ]
  },
  {
    title: 'Troubleshooting',
    path: '/troubleshooting',
    children: [
      ['/recipes/job-debug-tracing', 'Job debug tracing'],
      ['/recipes/error-notifications', 'Error notification emails'],
      {
        title: 'Recipe design errors',
        path: '/recipes/recipe-design-time-errors',
        children: [
          [
            '/recipes/recipe-design-time-errors#missing-required-input-fields-at-design-time',
            'Missing required fields'
          ],
          [
            '/recipes/recipe-design-time-errors#design-time-formula-errors',
            'Formula errors'
          ],
          [
            '/recipes/recipe-design-time-errors#invalid-datapills',
            'Invalid datapills'
          ],
          [
            '/recipes/recipe-design-time-errors#app-connection-errors',
            'App connection errors'
          ]
        ]
      },
      {
        title: 'Recipe logic errors',
        path: '/recipes/recipe-logic-errors',
        children: [
          [
            '/recipes/recipe-logic-errors#incorrect-recipe-step-indentations',
            'Inaccurate step indentations'
          ],
          [
            '/recipes/recipe-logic-errors#incorrect-list-management',
            'Inaccurate list management'
          ],
          [
            '/recipes/recipe-logic-errors#infinite-looping',
            'Infinite looping'
          ],
          [
            '/recipes/recipe-logic-errors#unexpected-trigger-events-data-duplication',
            'Unexpected trigger events'
          ],
          [
            '/recipes/recipe-logic-errors#missing-trigger-events',
            'Missing trigger events'
          ]
        ]
      },
      {
        title: 'Job errors',
        path: '/recipes/recipe-job-errors',
        children: [
          [
            '/recipes/recipe-job-errors#trigger-errors',
            'Trigger errors'
          ],
          [
            '/recipes/recipe-job-errors#run-time-formula-errors',
            'Formula errors'
          ],
          [
            '/recipes/recipe-job-errors#missing-required-fields-at-run-time',
            'Missing required fields'
          ],
          ['/recipes/recipe-job-errors#timeouts', 'Timeouts'],
          [
            '/recipes/recipe-job-errors#passing-wrong-datatypes-into-input-fields',
            'Non-matching datatypes'
          ],
          [
            '/recipes/recipe-job-errors#error-code-401-unauthorized',
            '401 unauthorized'
          ],
          [
            '/recipes/recipe-job-errors#error-code-403-forbidden',
            '403 forbidden'
          ],
          [
            '/recipes/recipe-job-errors#error-code-404-not-found',
            '404 not found'
          ],
          [
            '/recipes/recipe-job-errors#error-code-422-unprocessable-entity',
            '422 unprocessable entity'
          ],
          [
            '/recipes/recipe-job-errors#error-code-500-internal-server-error',
            '500 internal server error'
          ]
        ]
      },
      ['/recipes/formula-errors', 'Formula errors'],
      ['/recipes/infinite-loops', 'Infinite loops'],
      ['/recipes/deduplication', 'Deduplication'],
      ['/recipes/rate-limiting', 'Rate limiting']
    ]
  },
  {
    title: 'Data types and formulas',
    path: '/formulas',
    children: [
      {
        title: 'Formula mode',
        path: '/formulas/formula-mode',
        children: [
          [
            '/formulas/formula-mode#filter-formulas-displayed-by-data-type',
            'Filter formulas by data type'
          ],
          [
            '/formulas/formula-mode#formula-hints-and-syntax',
            'Formula hints and syntax'
          ],
          [
            '/formulas/formula-mode#text-vs-formula-mode',
            'Text mode VS formula mode'
          ],
          [
            '/formulas/formula-mode#conditionals',
            'Ternary condition'
          ]
        ]
      },
      ['/formulas/string-formulas', 'String formulas'],
      ['/formulas/number-formulas', 'Number formulas'],
      ['/formulas/date-formulas', 'Date formulas'],
      ['/formulas/array-list-formulas', 'List formulas'],
      ['/formulas/other-formulas', 'Other formulas'],
      ['/formulas/complex-data-types', 'Complex data types']
    ]
  },
  ['/tools', 'Tools'],
  {
    title: 'Files and attachments',
    path: '/handling-files-and-attachments',
    children: [
      ['/features/handling-csv-files', 'Handling CSV'],
      ['/features/handling-json', 'Handling JSON'],
      ['/features/handling-xml', 'Handling XML'],
      ['/features/handling-soap', 'Handling SOAP'],
      ['/features/handling-yaml', 'Handling YAML'],
      ['/features/handling-binary-files', 'Handling binary files'],
      ['/features/file-streaming', 'File streaming'],
      ['/features/compress-files', 'Compress files'],
      ['/features/pgp-encryption', 'Encrypt & decrypt files']
    ]
  },
  {
    title: 'Batch processing',
    path: '/features/batch-processing',
    children: [
      ['/features/batch-processing#batch-triggers', 'Batch triggers'],
      ['/features/batch-processing#batch-actions', 'Batch actions'],
      [
        '/features/batch-processing#maximize-data-throughput-with-batch-processing',
        'Maximize data throughput'
      ]
    ]
  },
  {
    title: 'Teams and collaboration',
    path: '/user-accounts-and-teams/team-collaboration',
    children: [
      [
        '/user-accounts-and-teams/team-collaboration#team-roles',
        'Role-based access'
      ],
      [
        '/user-accounts-and-teams/team-collaboration#tracking-changes-made-by-collaborators',
        'Tracking changes from team collaborators'
      ],
      {
        title: 'Single sign on',
        path: '/user-accounts-and-teams/single-sign-on',
        children: [
          [
            '/user-accounts-and-teams/single-sign-on#okta-single-sign-on',
            'Okta SSO'
          ],
          [
            '/user-accounts-and-teams/single-sign-on#onelogin-single-sign-on',
            'OneLogin SSO'
          ],
          [
            '/user-accounts-and-teams/single-sign-on#workato-single-sign-on-setup',
            'Workato SSO settings'
          ],
          [
            '/user-accounts-and-teams/single-sign-on#logging-into-saml-enabled-team',
            'Logging into SAML-enabled team'
          ]
        ]
      },
      {
        title: 'SAML Just-In-Time provisioning',
        path: '/user-accounts-and-teams/just-in-time-provisioning',
        children: [
          [
            '/user-accounts-and-teams/just-in-time-provisioning#configure-saml-attribute-on-saml-provider',
            'Configuring JIT provisioning for custom roles'
          ]
        ]
      }
    ]
  },
  {
    title: 'People Task by Workato',
    path: '/workflow',
    children: [
      {
        title: 'Administrators',
        path: '/workflow#using-people-task-as-an-admin',
        children: [
          [
            '/workflow#customize-people-task-subdomain',
            'Customize subdomain'
          ],
          [
            '/workflow#adding-people-task-participants',
            'Invite participants'
          ]
        ]
      },
      ['/workflow#people-task-example-scenario', 'Example recipe'],
      {
        title: 'Participants',
        path: '/workflow#using-people-task-as-an-approver',
        children: [
          ['/workflow#approver-view', 'Approver view'],
          ['/workflow#approving-tasks', 'Approving tasks']
        ]
      }
    ]
  },
  {
    title: 'Recipe lifecycle management',
    path: '/recipe-development-lifecycle',
    children: [
      [
        '/recipe-development-lifecycle/rdlc-guide-planning',
        'Planning for lifecycle management'
      ],
      [
        '/recipe-development-lifecycle/export',
        'Exporting: Packaging recipes and dependencies'
      ],
      [
        '/recipe-development-lifecycle/import',
        'Importing: Deployment'
      ],
      [
        '/recipe-development-lifecycle/rdlc-guide-source-control',
        'Working with external source control systems'
      ]
    ]
  },
  {
    title: 'On-prem connectivity',
    path: '/on-prem',
    children: [
      {
        title: 'On-prem group',
        path: '/on-prem/groups',
        children: [
          ['/on-prem/groups/create-group', 'Create a group'],
          ['/on-prem/groups/add-agent', 'Add agent to a group'],
          ['/on-prem/groups/group-status', 'Status of a group'],
          [
            '/on-prem/groups/common-config',
            'Common configuration for agents'
          ]
        ]
      },
      {
        title: 'On-prem agent',
        path: '/on-prem/agents',
        children: [
          ['/on-prem/agents/setup', 'Setup agent'],
          ['/on-prem/agents/run', 'Run agent'],
          ['/on-prem/agents/upgrade', 'Upgrade agent'],
          ['/on-prem/agents/profile', 'Profiles'],
          ['/on-prem/agents/connection', 'On-prem connections'],
          [
            '/on-prem/agents/password-encryption',
            'Password encryption'
          ],
          ['/on-prem/agents/proxy', 'Proxy server'],
          ['/on-prem/agents/logging', 'Logging'],
          ['/on-prem/agents/extension', 'Extensions'],
          ['/on-prem/agents/versions', 'Version notes']
        ]
      }
    ]
  },
  {
    title: 'Key features',
    path: '/features',
    children: [
      ['/features/admin-dashboard', 'Workato Dashboard'],
      ['/features/activity-audit-log', 'Activity audit log'],
      ['/job-history-replication', 'Audit log streaming'],
      ['/features/scheduler', 'Scheduler'],
      ['/features/secondary-connectors', 'Secondary connectors'],
      {
        title: 'Lookup tables',
        path: '/features/lookup-tables',
        children: [
          [
            '/features/lookup-tables#setting-up-your-lookup-tables',
            'Setup'
          ],
          [
            '/features/lookup-tables#add-entry-action',
            'Add entry action'
          ],
          [
            '/features/lookup-tables#lookup-entry-action',
            'Lookup entry action'
          ],
          [
            '/features/lookup-tables#search-entries-action',
            'Search entry action'
          ],
          [
            '/features/lookup-tables#lookup-table-formulas',
            'Lookup table formulas'
          ],
          ['/features/lookup-tables#limits', 'Table limits']
        ]
      },
      {
        title: 'Message template',
        path: '/features/message-template',
        children: [
          ['/features/message-template#variables', 'Variables'],
          ['/features/message-template#sections', 'Sections'],
          ['/features/message-template#comments', 'Comments'],
          ['/features/message-template#partials', 'Partials'],
          [
            '/features/message-template#using-templates-in-recipes',
            'Using templates in recipes'
          ]
        ]
      },
      {
        title: 'Callable recipes',
        path: '/features/callable-recipes',
        children: [
          ['/features/callable-recipes/walk-through', 'Walk-through'],
          [
            '/features/callable-recipes/new-call-trigger',
            'New call for recipe trigger'
          ],
          [
            '/features/callable-recipes/call-recipe-action',
            'Call recipe actions'
          ],
          [
            '/features/callable-recipes/return-response-action',
            'Return response from recipe action'
          ],
          [
            '/features/callable-recipes/rest-endpoint',
            'Callable recipe as a REST endpoint'
          ],
          [
            '/features/callable-recipes/handling-raw-content',
            'Setting up callable recipes to handle raw content'
          ]
        ]
      },
      ['/features/account-properties', 'Account properties'],
      ['/features/utilities', 'Utility'],
      ['/features/variables', 'Variables'],
      ['/features/data-masking', 'Data masking'],
      ['/signing-up/sso', 'Single Sign-On (SSO)'],
      {
        title: 'List management',
        path: '/features/list-management',
        children: [
          [
            '/features/list-management#example-list-setup',
            'Example list setup'
          ],
          [
            '/features/list-management#using-datapills-directly-in-an-action-without-list-processing',
            'Use datapills from list without repeat step'
          ],
          [
            '/features/list-management#using-datapills-in-an-action-with-a-list-input-action-handles-list-processing-implicitly',
            'Use datapills from list in input list'
          ],
          [
            '/features/list-management#using-datapills-in-an-action-with-a-repeat-step-action-does-not-handle-list-processing-list-processing-needs-to-be-done-explicitly-at-the-recipe-logic-level',
            'Use datapills from list with repeat step'
          ],
          ['/features/fixed-dynamic-lists', 'Fixed & Dynamic lists'],
          [
            '/features/list-management#common-mistake-when-using-repeat-step',
            'Common repeat step mistakes'
          ],
          [
            '/features/list-management#list-connector-accumulator',
            'List connector'
          ]
        ]
      },
      ['/features/collection', 'Collection by Workato'],
      ['/data-retention', 'Data retention'],
      ['/features/common-data-model', 'Common data model'],
      ['/features/api-management', 'API Platform']
    ]
  },
  {
    title: 'Workbot for Slack',
    path: '/workbot/workbot',
    children: [
      [
        '/workbot/workbot#slack-connector-vs-workbot-for-slack-connector',
        'Slack vs Workbot'
      ],
      ['/workbot/workbot-for-slack-setup', 'Workbot for Slack setup'],
      ['/workbot/using-workbot-for-slack', 'Using Workbot for Slack'],
      ['/workbot/block-kit', 'Block kit'],
      ['/workbot/modals', 'Block kit in modals'],
      {
        title: 'Workbot triggers',
        path: '/workbot/workbot-triggers',
        children: [
          ['/workbot/workbot-shortcuts', 'New shortcut trigger'],
          [
            '/workbot/workbot-triggers#new-command-trigger-building-custom-commands',
            'New command'
          ],
          [
            '/workbot/workbot-triggers#new-event-trigger',
            'New event'
          ],
          [
            '/workbot/workbot-triggers#new-url-mention',
            'New URL mention'
          ],
          [
            '/workbot/workbot-triggers#new-dynamic-menu-event',
            'New dynamic menu event'
          ]
        ]
      },
      {
        title: 'Workbot actions',
        path: '/workbot/workbot-actions',
        children: [
          [
            '/workbot/workbot-actions#post-command-reply',
            'Post command reply'
          ],
          ['/workbot/workbot-actions#post-message', 'Post message'],
          ['/workbot/workbot-actions#open-update-or-push-modal-view-action', 'Open/update or push modal view'],
          ['/workbot/workbot-actions#publish-app-home-view', 'Publish app home view'],
        ]
      },
      {
        title: 'Workbot basics',
        path: '/workbot/workbot-commands',
        children: [
          ['/workbot/workbot-commands', 'Workbot basics: Commands'],
          [
            '/workbot/workbot-command-reply',
            'Workbot basics: Command reply'
          ]
        ]
      },
      {
        title: 'Workbot advanced topics',
        path: '/workbot/workbot-advanced-topics',
        children: [
          [
            '/workbot/using-dialogs-with-workbot',
            'Using Dialogs with Workbot'
          ],
          [
            '/workbot/workbot-dynamic-menus',
            'Dynamic menus in dialogs'
          ],
          ['/workbot/workbot-update-message', 'Updating messages'],
          ['/workbot/workbot-message-menus', 'Workbot message menus'],
          ['/workbot/workbot-buttons', 'Workbot buttons'],
          [
            '/workbot/workbot-latebinding',
            'Workbot personal connections'
          ],
          [
            '/workbot/workbot-troubleshooting',
            'Workbot troubleshooting'
          ],
          {
            title: 'Workbot slash commands',
            path: '/workbot/configuring-slash-commands',
            children: [
              [
                '/workbot/configuring-slash-commands',
                'Configuring slash commands'
              ],
              [
                '/workbot/legacy-slash-commands',
                'Legacy slash commands'
              ]
            ]
          },
          {
            title: 'Custom Workbots',
            path: '/workbot/workbot-custom-bots',
            children: [
              [
                '/workbot/custom-workbot-vs-legacy-slash-commands',
                'Custom Workbot vs Legacy slash commands'
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Workbot for MS Teams',
    path: '/workbot-for-teams/workbot',
    children: [
      [
        '/workbot-for-teams/using-workbot-for-teams',
        'Using Workbot for MS Teams'
      ],
      ['/workbot-for-teams/getting-started', 'Getting started'],
      ['/workbot-for-teams/workbot-triggers', 'Triggers'],
      ['/workbot-for-teams/workbot-actions', 'Actions'],
      [
        '/workbot-for-teams/buttons-choices-task-modules',
        'Buttons task modules & pick lists'
      ],
      ['/workbot-for-teams/workbot-latebinding','Personal connections']
    ]
  },
  {
    title: 'Workbot for Workplace',
    path: '/workbot-for-workplace/workbot',
    children: [
      ['/workbot-for-workplace/getting-started', 'Getting started'],
      [
        '/workbot-for-workplace/using-workbot-for-workplace',
        'Using Workbot for Workplace'
      ],
      ['/workbot-for-workplace/workbot-triggers', 'Workbot triggers'],
      ['/workbot-for-workplace/workbot-actions', 'Workbot actions']
    ]
  },
  {
    title: 'API Platform',
    path: '/api-management',
    children: [
      ['/api-mgmt/dashboard', 'Dashboard'],
      ['/api-mgmt/api-collections', 'API Collections'],
      ['/api-mgmt/api-endpoints', 'API Endpoints'],
      {
        title: 'Managing Clients',
        path: '/api-mgmt/api-client-mgmt',
        children: [
          ['/api-mgmt/api-access-policies', 'API Access Policies'],
        ]
      },
      {
        title: 'Access Tokens',
        path: '/api-mgmt/access-tokens',
        children: [
          ['/api-mgmt/auth-token', 'Auth Token'],
          ['/api-mgmt/oauth2', 'OAuth 2.0 Token'],
          ['/api-mgmt/jwt-token', 'JWT Token'],
          ['/api-mgmt/jwt-workato-claim', 'JWT Workato claim']
        ]
      },
      ['/api-mgmt/api-prefix', 'API Prefix'],
      ['/api-mgmt/custom-domain', 'Custom Domain'],
      ['/api-mgmt/calling-apis', 'Calling APIs'],
      [
        '/features/callable-recipes/handling-raw-content',
        'Setting up endpoints to handle raw content'
      ],
      ['/api-mgmt/api-security', 'Security Best Practices for APIs']
    ]
  },
  {
    title: 'Connectors',
    path: '/connectors',
    children: [
      {
        title: 'Active Directory',
        path: '/connectors/active_directory',
        children: [
          [
            '/connectors/active_directory#how-to-connect-to-active-directory-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/active_directory/search_entries',
            'Search entries'
          ],
          ['/connectors/active_directory/add_entry', 'Add entry'],
          [
            '/connectors/active_directory/update_entry',
            'Update entry'
          ],
          [
            '/connectors/active_directory/new_entry_trigger',
            'New entry trigger'
          ],
          [
            '/connectors/active_directory/updated_entry_trigger',
            'New/updated entry trigger'
          ],
          [
            '/connectors/active_directory/scheduled_trigger',
            'Scheduled entry search trigger'
          ]
        ]
      },
      {
        title: 'ADP Workforce Now',
        path: '/connectors/adp_workforce',
        children: [
          [
            '/connectors/adp_workforce#how-to-connect-to-adp-workforce-now-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/adp_workforce/scheduled_worker_search',
            'Scheduled worker search'
          ]
        ]
      },
      [
        '/connectors/analytics-cloud',
        'Analytics Cloud (Wave Analytics)'
      ],
      {
        title: 'Amazon S3',
        path: '/connectors/s3',
        children: [
          [
            '/connectors/s3/connection-setup',
            'Connection setup'
          ],
          [
            '/connectors/s3/trigger-csv-file',
            'New CSV file trigger'
          ],
          ['/connectors/s3/trigger-new-file', 'New file trigger'],
          ['/connectors/s3/action-upload-file', 'Upload file action'],
          [
            '/connectors/s3/action-download-file',
            'Download file action'
          ],
          ['/connectors/s3/action-list-files', 'List files action'],
          ['/connectors/s3/action-delete-file', 'Delete file action'],
          [
            '/connectors/s3/action-create-bucket',
            'Create bucket action'
          ],
          ['/connectors/s3/action-presign-url', 'Generate presigned URL action'],
        ]
      },
      {
        title: 'AWS Lambda',
        path: '/connectors/aws_lambda',
        children: [
          [
            '/connectors/aws_lambda#output-schema-definition',
            'Output schema definition'
          ],
          [
            '/connectors/aws_lambda#json-response',
            'JSON output definition'
          ],
          [
            '/connectors/aws_lambda#primitive-data-response',
            'Primitive output definition'
          ]
        ]
      },
      {
        title: 'Box',
        path: '/connectors/box',
        children: [
          [
            '/connectors/box#how-to-connect-to-box-on-workato',
            'Connection setup'
          ],
          ['/connectors/box/trigger-new-file', 'New file trigger'],
          ['/connectors/box/trigger-new-csv', 'New CSV file trigger'],
          [
            '/connectors/box/action-search-files',
            'Search files action'
          ],
          [
            '/connectors/box/action-download-file',
            'Download file action'
          ],
          [
            '/connectors/box/action-upload-file-contents',
            'Upload file action'
          ]
        ]
      },
      {
        title: 'Coupa',
        path: '/connectors/coupa',
        children: [
          ['/connectors/coupa/introduction', 'Introduction'],
          ['/connectors/coupa/object-actions', 'Object actions'],
          ['/connectors/coupa/object-triggers', 'Object triggers'],
          [
            '/connectors/coupa/purchase-order-actions',
            'Purchase order actions'
          ],
          ['/connectors/coupa/supplier-actions', 'Supplier actions'],
          [
            '/connectors/coupa/integration-action',
            'Integration actions'
          ]
        ]
      },
      ['/connectors/dialogflow', 'Dialogflow'],
      {
        title: 'DocuSign',
        path: '/connectors/docusign',
        children: [
          [
            '/connectors/docusign#how-to-connect-to-docusign-on-workato',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'Dropbox',
        path: '/connectors/dropbox',
        children: [
          ['/connectors/dropbox', 'Connection setup'],
          [
            '/connectors/dropbox/trigger-new-updated-file',
            'New/updated file trigger'
          ],
          [
            '/connectors/dropbox/trigger-new-updated-csv',
            'New/updated CSV trigger'
          ],
          [
            '/connectors/dropbox/action-search-files',
            'Search files action'
          ],
          [
            '/connectors/dropbox/action-upload-file-contents',
            'Upload file contents action'
          ]
        ]
      },
      {
        title: 'Freshdesk',
        path: '/connectors/freshdesk',
        children: [
          [
            '/connectors/freshdesk#how-to-connect-to-freshdesk-on-workato',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'G2',
        path: '/connectors/g2',
        children: [
          ['/connectors/g2/introduction', 'Introduction'],
          [
            '/connectors/g2/introduction#use-cases',
            'Use cases'
          ],
          [
            '/connectors/g2/event_triggers',
            'New event triggers'
          ],
          [
            '/connectors/g2/get_object_actions',
            'Get object actions'
          ],
          [
            '/connectors/g2/list_all_action',
            'List all action'
          ]
        ]
      },
      ['/connectors/gmail', 'Gmail'],
      {
        title: 'Google BigQuery',
        path: '/connectors/bigquery',
        children: [
          [
            '/connectors/bigquery#how-to-connect-to-bigquery-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/bigquery/new-row-trigger',
            'New rows trigger'
          ],
          [
            '/connectors/bigquery/job-completed-trigger',
            'New job completed trigger'
          ],
          [
            '/connectors/bigquery/scheduled-query-trigger',
            'Scheduled query trigger'
          ],
          ['/connectors/bigquery/insert', 'Insert rows action'],
          ['/connectors/bigquery/select', 'Select rows action'],
          ['/connectors/bigquery/get-query-result-action', 'Get query job results action']
        ]
      },
      {
        title: 'Google Drive',
        path: '/connectors/google-drive',
        children: [
          [
            '/connectors/google-drive#how-to-connect-to-google-drive-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-drive/trigger-new-file',
            'New file/folder'
          ],
          [
            '/connectors/google-drive/trigger-new-file-hierarchy',
            'New file/folder in folder hierarchy'
          ],
          [
            '/connectors/google-drive/action-create-folder',
            'Create folder'
          ],
          [
            '/connectors/google-drive/action-download-file',
            'Download file'
          ],
          [
            '/connectors/google-drive/action-rename-file',
            'Rename/move file or folder'
          ],
          [
            '/connectors/google-drive/action-search-files',
            'Search files or folders action'
          ],
          [
            '/connectors/google-drive/action-upload-file',
            'Upload file action'
          ]
        ]
      },
      {
        title: 'Google Sheets',
        path: '/connectors/google-sheets',
        children: [
          [
            '/connectors/google-sheets#how-to-connect-to-google-sheets-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-sheets/trigger-new-row',
            'New row trigger'
          ],
          [
            '/connectors/google-sheets/trigger-new-updated-row',
            'New/updated row trigger'
          ],
          [
            '/connectors/google-sheets/action-add-row',
            'Add row action'
          ],
          [
            '/connectors/google-sheets/action-add-rows',
            'Add rows in bulk action'
          ],
          [
            '/connectors/google-sheets/action-search-rows-v4',
            'Search rows action'
          ],
          [
            '/connectors/google-sheets/action-update-row-v4',
            'Update row action'
          ],
          [
            '/connectors/google-sheets/action-search-rows',
            'Search rows using query action'
          ],
          [
            '/connectors/google-sheets/action-update-row',
            'Update row using row ID action'
          ]
        ]
      },
      {
        title: 'Google Speech-to-Text',
        path: '/connectors/google-speech-to-text',
        children: [
          [
            '/connectors/google-speech-to-text#how-to-connect-to-google-text-to-speech-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-speech-to-text/action-short-speech',
            'Convert short speech to text action'
          ]
        ]
      },
      {
        title: 'Google Text-to-Speech',
        path: '/connectors/google-text-to-speech',
        children: [
          [
            '/connectors/google-text-to-speech#how-to-connect-to-google-text-to-speech-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-text-to-speech/action-synthesize-text',
            'Convert text to speech action'
          ]
        ]
      },
      {
        title: 'Google Translate',
        path: '/connectors/google-translate',
        children: [
          [
            '/connectors/google-translate#how-to-connect-to-google-translate-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-translate/action-translate-text',
            'Translate text action'
          ]
        ]
      },
      {
        title: 'Google Vision',
        path: '/connectors/google-vision',
        children: [
          [
            '/connectors/google-vision#how-to-connect-to-google-vision-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/google-vision/action-read-text',
            'Read text from image'
          ]
        ]
      },
      ['/connectors/http', 'HTTP'],
      {
        title: 'Intacct',
        path: '/connectors/intacct',
        children: [
          [
            '/connectors/intacct#connection-setup',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'JDBC',
        path: '/connectors/jdbc',
        children: [
          [
            '/connectors/jdbc#how-to-connect-to-jdbc-on-workato',
            'Connection setup'
          ],
          ['/connectors/jdbc/select', 'Select actions'],
          ['/connectors/jdbc/insert', 'Insert actions'],
          ['/connectors/jdbc/update', 'Update actions'],
          ['/connectors/jdbc/delete', 'Delete actions'],
          ['/connectors/jdbc/run_sql', 'Run custom SQL action'],
          ['/connectors/jdbc/new-row-trigger', 'New row trigger'],
          [
            '/connectors/jdbc/scheduled-query-trigger',
            'Scheduled query trigger'
          ]
        ]
      },
      {
        title: 'Jira',
        path: '/connectors/jira',
        children: [
          [
            '/connectors/jira#how-to-connect-to-jira-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/jira/actions#create-issue',
            'Create issue action'
          ],
          ['/connectors/jira/actions#get-issue', 'Get issue action'],
          [
            '/connectors/jira/actions#search-issues',
            'Search issues action'
          ],
          [
            '/connectors/jira/actions#update-issue',
            'Update issue action'
          ],
          [
            '/connectors/jira/actions#search-assignable-users',
            'Search assignable user action'
          ],
          [
            '/connectors/jira/actions#assign-user-to-issue',
            'Assign user to issue action'
          ],
          [
            '/connectors/jira/actions#download-attachment',
            'Download attachment action'
          ],
          [
            '/connectors/jira/actions#upload-attachment',
            'Upload attachment action'
          ],
          [
            '/connectors/jira/actions#create-comment',
            'Create comment action'
          ],
          [
            '/connectors/jira/actions#get-issue-comments',
            'Get issue comments action'
          ],
          [
            '/connectors/jira/actions#update-comment',
            'Update comment action'
          ],
          [
            '/connectors/jira/actions#create-user',
            'Create user action'
          ],
          [
            '/connectors/jira/actions#get-user-details',
            'Get user details action'
          ],
          [
            '/connectors/jira#using-jira-real-time-triggers',
            'Using Jira real-time triggers'
          ],
          [
            '/connectors/jira/triggers#new-updated-issue-real-time',
            'New/updated issue (real-time) trigger'
          ],
          [
            '/connectors/jira/triggers#new-issue',
            'New issue trigger'
          ],
          [
            '/connectors/jira/triggers#updated-issue',
            'Updated issue trigger'
          ],
          [
            '/connectors/jira/triggers#new-project',
            'New project trigger'
          ],
          [
            '/connectors/jira/triggers#new-updated-comment-real-time',
            'New/updated comment (real-time) trigger'
          ],
          [
            '/connectors/jira/triggers#new-updated-worklog-real-time',
            'New/updated worklog (real-time) trigger'
          ]
        ]
      },
      {
        title: 'Java messaging service',
        path: '/connectors/jms',
        children: [
          [
            '/connectors/jms#how-to-connect-to-the-jms-connector-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/jms#using-the-new-message-in-queue-topic-trigger',
            'New message trigger'
          ],
          [
            '/connectors/jms#using-the-publish-message-in-queue-topic-action',
            'Publish message action'
          ]
        ]
      },
      {
        title: 'Mapper by Workato',
        path: '/connectors/mapper',
        children: [
          [
            '/connectors/mapper#how-to-connect-to-the-mapper-connector-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/mapper#using-the-map-to-object-action',
            'Map to object action'
          ]
        ]
      },
      {
        title: 'Microsoft Dynamics CRM',
        path: '/connectors/dynamics-crm',
        children: [
          [
            '/connectors/dynamics-crm#connecting-to-a-cloud-microsoft-dynamics-crm-instance',
            'Cloud connection setup'
          ],
          [
            '/connectors/dynamics-crm#connecting-to-an-on-premise-microsoft-dynamics-crm-instance',
            'On-premise connection setup'
          ],
          [
            '/connectors/dynamics-crm/picklist-lookups',
            'Cached picklist lookups'
          ]
        ]
      },
      {
        title: 'MySQL',
        path: '/connectors/mysql',
        children: [
          [
            '/connectors/mysql#how-to-connect-to-mysql-on-workato',
            'Connection setup'
          ],
          ['/connectors/mysql/select', 'Select actions'],
          ['/connectors/mysql/insert', 'Insert actions'],
          ['/connectors/mysql/update', 'Update actions'],
          ['/connectors/mysql/upsert', 'Upsert actions'],
          ['/connectors/mysql/delete', 'Delete actions'],
          ['/connectors/mysql/run_sql', 'Run custom SQL action'],
          ['/connectors/mysql/new-row-trigger', 'New row trigger'],
          [
            '/connectors/mysql/updated-row-trigger',
            'New/updated row trigger'
          ],
          [
            '/connectors/mysql/scheduled-query-trigger',
            'Scheduled query trigger'
          ]
        ]
      },
      {
        title: 'NetSuite',
        path: '/connectors/netsuite',
        children: [
          [
            '/connectors/netsuite#how-to-connect-to-netsuite-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/netsuite#new-classification-object-trigger',
            'Classification record trigger'
          ],
          [
            '/connectors/netsuite#new-standard-object-and-new-custom-object-trigger',
            'New record trigger'
          ],
          [
            '/connectors/netsuite#new-updated-standard-object-and-new-updated-custom-object-trigger',
            'New/updated record trigger'
          ],
          [
            '/connectors/netsuite/trigger-new-records-batch',
            'New records batch trigger'
          ],
          [
            '/connectors/netsuite/trigger-new-records-batch',
            'New/updated records batch trigger'
          ],
          [
            '/connectors/netsuite#new-saved-search-result-for-object-trigger',
            'New saved search trigger'
          ],
          [
            '/connectors/netsuite#new-updated-saved-search-result-for-object-trigger',
            'New/updated saved search trigger'
          ],
          [
            '/connectors/netsuite#add-standard-object-and-add-custom-object-action',
            'Create record action'
          ],
          [
            '/connectors/netsuite/action-batch-create',
            'Create records in bulk action'
          ],
          [
            '/connectors/netsuite#search-standard-objects-action',
            'Search standard records action'
          ],
          [
            '/connectors/netsuite#search-custom-objects-action',
            'Search custom records action'
          ],
          [
            '/connectors/netsuite#get-all-standard-objects-action',
            'Get all standard records action'
          ],
          [
            '/connectors/netsuite#update-standard-object-and-update-custom-object-action',
            'Update record action'
          ],
          [
            '/connectors/netsuite/action-batch-update',
            'Update records in bulk action'
          ],
          [
            '/connectors/netsuite/action-batch-upsert',
            'Upsert records in bulk action'
          ],
          [
            '/connectors/netsuite/action-get-case-comments',
            'Get case comments action'
          ],
          [
            '/connectors/netsuite/recipe-migration-guide',
            'Recipe migration guide 19/5/2020'
          ]
        ]
      },
      {
        title: 'Okta',
        path: '/connectors/okta',
        children: [
          ['/connectors/okta#how-to-connect-to-okta', 'Connection Setup'],
          {
            title: 'Triggers',
            children: [
              ['/connectors/okta/new-events-trigger', 'New Events Trigger'],
              ['/connectors/okta/scheduled-search-trigger', 'Scheduled event search trigger']
            ]
          },
          {
            title: 'User lifecycle actions',
            children: [
              ['/connectors/okta/create-user-action', 'Create users'],
              ['/connectors/okta/activate-user-action', 'Activate users'],
              ['/connectors/okta/update-user-action', 'Update users'],
              ['/connectors/okta/add-user-to-group-action', 'Add users to group'],
              ['/connectors/okta/remove-user-from-group-action', 'Remove user from group'],
              ['/connectors/okta/deactivate-user-action', 'Deactivate users'],
              ['/connectors/okta/delete-user-action', 'Delete users']
            ]
          },
          {
            title: 'Okta resource actions',
            children: [
              ['/connectors/okta/get-user-by-id-action', 'Get user by ID'],
              ['/connectors/okta/get-user-groups-action', 'Get user groups'],
              ['/connectors/okta/get-groups-action', 'Get groups by name'],
              ['/connectors/okta/get-group-members-action', 'Get group members'],
              ['/connectors/okta/get-recent-events-by-user-action', 'Get recent log on events by user'],
              ['/connectors/okta/get-recent-events-by-ip-action', 'Get recent log on events by IP address']
            ]
          },
          ['/connectors/okta/events-output-datatree', 'Log events datatree']
        ]
      },
      {
        title: 'On-prem command-line scripts',
        path: '/connectors/on-prem-command-line-scripts',
        children: [
          [
            '/connectors/on-prem-command-line-scripts#setup-and-connection',
            'Setup and connection'
          ],
          [
            '/connectors/on-prem-command-line-scripts#execute-command-line-script-action',
            'Execute command-line script action'
          ]
        ]
      },
      {
        title: 'On-prem files',
        path: '/connectors/on-prem-files',
        children: [
          [
            '/connectors/on-prem-files#how-to-connect-to-on-prem-files-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/on-prem-files/trigger-new-file',
            'New file trigger'
          ],
          [
            '/connectors/on-prem-files/trigger-new-csv',
            'New CSV file trigger'
          ],
          [
            '/connectors/on-prem-files/new-line-trigger',
            'New CSV line trigger'
          ],
          [
            '/connectors/on-prem-files/new-lines-trigger',
            'New CSV lines trigger'
          ],
          [
            '/connectors/on-prem-files/upload-file-action',
            'Upload file action'
          ],
          [
            '/connectors/on-prem-files/download-file-action',
            'Download file action'
          ],
          [
            '/connectors/on-prem-files/move-file-action',
            'Move file action'
          ],
          [
            '/connectors/on-prem-files/rename-file-action',
            'Rename file action'
          ],
          [
            '/connectors/on-prem-files/list-files-action',
            'List files in folder action'
          ],
          [
            '/connectors/on-prem-files/append-csv-line-action',
            'Append CSV line action'
          ]
        ]
      },
      {
        title: 'Oracle',
        path: '/connectors/oracle',
        children: [
          ['/connectors/oracle/introduction', 'Introduction'],
          ['/connectors/oracle/new-row-trigger', 'New row trigger'],
          [
            '/connectors/oracle/updated-row-trigger',
            'New/updated row trigger'
          ],
          ['/connectors/oracle/select', 'Select actions'],
          ['/connectors/oracle/insert', 'Insert actions'],
          ['/connectors/oracle/update', 'Update actions'],
          ['/connectors/oracle/upsert', 'Upsert actions'],
          ['/connectors/oracle/delete', 'Delete actions'],
          ['/connectors/oracle/run_sql', 'Run custom SQL action'],
          [
            '/connectors/oracle/stored-procedure',
            'Execute stored procedure'
          ],
          ['/connectors/oracle/best-practices', 'Best Practices'],
          ['/connectors/database-common-use-cases', 'Use cases'],
          ['/connectors/oracle/trouble-shooting', 'Troubleshooting']
        ]
      },
      {
        title: 'Oracle EBS',
        path: '/connectors/oracle-ebs',
        children: [
          [
            '/connectors/oracle-ebs#how-to-connect-to-oracle-e-business-suite-on-workato',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'Outlook',
        path: '/connectors/outlook/outlook',
        children: [
          [
            '/connectors/outlook/outlook#how-to-connect-to-outlook',
            'Connection setup'
          ],
          [
            '/connectors/outlook/trigger-new-email',
            'New email trigger'
          ]
        ]
      },
      {
        title: 'People Task by Workato',
        path: '/workflow',
        children: [
          ['/workflow#using-people-task-as-an-admin', 'Admin setup'],
          [
            '/workflow#people-task-example-scenario',
            'Recipe configuration'
          ],
          [
            '/workflow#using-people-task-as-an-approver',
            'Task approvals'
          ]
        ]
      },
      {
        title: 'PlanGrid',
        path: '/connectors/plangrid',
        children: [
          [
            '/connectors/plangrid#how-to-connect-to-plangrid-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/plangrid/object',
            'Objects supported on PlanGrid'
          ],
          [
            '/connectors/plangrid/object-action',
            'Objects actions on PlanGrid'
          ],
          [
            '/connectors/plangrid/object-trigger',
            'Objects triggers on PlanGrid'
          ]
        ]
      },
      {
        title: 'PostgreSQL',
        path: '/connectors/postgresql',
        children: [
          [
            '/connectors/postgresql#how-to-connect-to-postgresql-on-workato',
            'Connection setup'
          ],
          ['/connectors/postgresql/select', 'Select actions'],
          ['/connectors/postgresql/insert', 'Insert actions'],
          ['/connectors/postgresql/update', 'Update actions'],
          ['/connectors/postgresql/delete', 'Delete actions'],
          ['/connectors/postgresql/run_sql', 'Run custom SQL action'],
          [
            '/connectors/postgresql/new-row-trigger',
            'New row trigger'
          ],
          [
            '/connectors/postgresql/updated-row-trigger',
            'New/updated row trigger'
          ]
        ]
      },
      {
        title: 'PubSub by Workato',
        path: '/connectors/pubsub',
        children: [
          [
            '/connectors/pubsub#how-to-connect-to-the-pubsub-connector-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/pubsub#creating-and-managing-topics',
            'Topics management'
          ],
          [
            '/connectors/pubsub#using-the-new-message-trigger',
            'New message trigger'
          ],
          [
            '/connectors/pubsub#using-the-publish-message-action',
            'Publish message action'
          ]
        ]
      },
      {
        title: 'Quick Base',
        path: '/connectors/quick-base',
        children: [
          [
            '/connectors/quick-base#how-to-connect-to-quick-base-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/quick-base/action-import-csv',
            'Bulk import from CSV action'
          ]
        ]
      },
      {
        title: 'QuickBooks Online',
        path: '/connectors/quickbooks',
        children: [
          [
            '/connectors/quickbooks#how-to-connect-to-quickbooks-on-workato',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'RecipeOps by Workato',
        path: '/recipe-ops',
        children: [
          ['/recipe-ops#connection', 'Connection setup'],
          [
            '/recipe-ops#new-failed-job-trigger',
            'New failed job trigger'
          ],
          [
            '/recipe-ops#recipe-stopped-by-workato-trigger',
            'Recipe stopped by Workato trigger'
          ],
          [
            '/recipe-ops#get-account-details-action',
            'Get account details action'
          ],
          [
            '/recipe-ops#get-recipe-details-action',
            'Get recipe details action'
          ],
          [
            '/recipe-ops#search-job-history-action',
            'Search job history action'
          ],
          ['/recipe-ops#list-recipes-action', 'List recipes action'],
          ['/recipe-ops#start-recipe-action', 'Start recipe action'],
          ['/recipe-ops#stop-recipe-action', 'Stop recipe action']
        ]
      },
      {
        title: 'Redshift',
        path: '/connectors/redshift',
        children: [
          [
            '/connectors/redshift#how-to-connect-to-redshift-on-workato',
            'Connection setup'
          ],
          ['/connectors/redshift/select', 'Select actions'],
          ['/connectors/redshift/insert', 'Insert actions'],
          ['/connectors/redshift/update', 'Update actions'],
          ['/connectors/redshift/upsert', 'Upsert actions'],
          ['/connectors/redshift/delete', 'Delete actions'],
          ['/connectors/redshift/new-row-trigger', 'New row trigger'],
          [
            '/connectors/redshift/updated-row-trigger',
            'New/updated row trigger'
          ]
        ]
      },
      {
        title: 'Salesforce',
        path: '/connectors/salesforce',
        children: [
          [
            '/connectors/salesforce#how-to-connect-to-salesforce-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/salesforce/salesforce-generic',
            'Triggers/Actions in Salesforce'
          ],
          [
            '/connectors/salesforce/salesforce-real-time',
            'Real-time triggers'
          ],
          [
            '/connectors/salesforce/related-objects',
            'Object relationships'
          ],
          [
            '/connectors/salesforce/salesforce-generic#attachments-in-salesforce',
            'Handling attachments'
          ],
          ['/connectors/salesforce/salesforce-soql', 'Using SOQL'],
          [
            '/connectors/salesforce/salesforce-bulk',
            'Bulk data imports'
          ],
          [
            '/connectors/salesforce/batch-operations',
            'Batch create/update'
          ],
          [
            '/connectors/salesforce/database-syncs',
            'Syncing Salesforce with databases'
          ],
          [
            '/connectors/salesforce/approval-processes',
            'Approval processes'
          ]
        ]
      },
      {
        title: 'SAP',
        path: '/connectors/sap',
        children: [
          ['/connectors/sap', 'Connection setup'],
          ['/connectors/sap/trigger-new-idoc', 'New IDoc trigger'],
          ['/connectors/sap/action-send-idoc', 'Send IDoc action'],
          [
            '/connectors/sap/action-check-idoc',
            'Check IDoc status action'
          ],
          ['/connectors/sap/action-run-rfm', 'Run RFC action'],
          ['/connectors/sap/tls1.2', 'TLS 1.2 set up']
        ]
      },
      {
        title: 'SAP Concur',
        path: '/connectors/concur',
        children: [
          [
            '/connectors/concur/new-expense-report-trigger',
            'New expense report trigger'
          ]
        ]
      },
      {
        title: 'ServiceNow',
        path: '/connectors/servicenow',
        children: [
          [
            '/connectors/servicenow#how-to-connect-to-servicenow-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/servicenow/new-record-trigger',
            'New record trigger'
          ],
          [
            '/connectors/servicenow/updated-record-trigger',
            'New/updated record trigger'
          ],
          ['/connectors/servicenow/search', 'Search records action'],
          ['/connectors/servicenow/create', 'Create record actions'],
          ['/connectors/servicenow/update', 'Update record actions']
        ]
      },
      {
        title: 'SFTP',
        path: '/connectors/sftp',
        children: [
          [
            '/connectors/sftp/updated-file-trigger',
            'New/updated file trigger'
          ],
          [
            '/connectors/sftp/updated-csv-trigger',
            'New/updated CSV file trigger'
          ],
          ['/connectors/sftp/create-folder-action', 'Create folder'],
          [
            '/connectors/sftp/list-directory-action',
            'List directory'
          ],
          [
            '/connectors/sftp/get-file-information-action',
            'Get file information'
          ],
          ['/connectors/sftp/upload-file-action', 'Upload file'],
          ['/connectors/sftp/download-file-action', 'Download file'],
          [
            '/connectors/sftp/download-large-file-action',
            'Download large file'
          ],
          ['/connectors/sftp/rename-file-action', 'Rename file'],
          ['/connectors/sftp/remove-file-action', 'Remove file']
        ]
      },
      {
        title: 'SharePoint',
        path: '/connectors/sharepoint',
        children: [
          [
            '/connectors/sharepoint#how-to-connect-to-sharepoint-on-workato',
            'Connection setup'
          ]
        ]
      },
      {
        title: 'Slack',
        path: '/connectors/slack',
        children: [
          {
            title: 'Triggers',
            path: '/connectors/slack/triggers',
            children: [
              [
                '/connectors/slack/triggers#new-event-trigger-real-time',
                'New event trigger (real-time)'
              ],
              [
                '/connectors/slack/triggers#button-click-real-time',
                'Button click (real-time)'
              ]
            ]
          },
          {
            title: 'Actions',
            path: '/connectors/slack/actions',
            children: [
              [
                '/connectors/slack/actions#post-message-actions',
                'Post message actions'
              ],
              [
                '/connectors/slack/actions#respond-to-button-click-actions',
                'Respond to button click actions'
              ],
              [
                '/connectors/slack/actions#invite-user-to-channel-actions',
                'Invite user to channel actions'
              ],
              [
                '/connectors/slack/actions#invite-user-to-group-actions',
                'Invite user to group actions'
              ],
              [
                '/connectors/slack/actions#archive-channel-actions',
                'Archive channel actions'
              ],
              [
                '/connectors/slack/actions#unarchive-channel-actions',
                'Unarchive channel actions'
              ],
              [
                '/connectors/slack/actions#create-channel-actions',
                'Create channel actions'
              ],
              [
                '/connectors/slack/actions#set-channel-purpose-actions',
                'Set channel purpose actions'
              ],
              [
                '/connectors/slack/actions#set-channel-topic-actions',
                'Set channel topic actions'
              ]
            ]
          },
          [
            '/workbot/workbot#slack-connector-vs-workbot-for-slack-connector',
            'Slack vs Workbot'
          ],
          [
            '/connectors/slack#using-slack-message-buttons',
            'Message buttons'
          ],
          [
            '/connectors/slack#using-slack-threads',
            'Message threads'
          ],
          ['/connectors/slack/custom-oauth', 'Custom OAuth profiles']
        ]
      },
      {
        title: 'Snowflake',
        path: '/connectors/snowflake',
        children: [
          [
            '/connectors/snowflake#how-to-connect-to-snowflake-on-workato',
            'Connection setup'
          ],
          ['/connectors/snowflake/select', 'Select actions'],
          ['/connectors/snowflake/insert', 'Insert actions'],
          ['/connectors/snowflake/update', 'Update actions'],
          ['/connectors/snowflake/delete', 'Delete actions'],
          ['/connectors/snowflake/run_sql', 'Run custom SQL action'],
          [
            '/connectors/snowflake/bulk-load-s3',
            'Bulk load from Amazon S3'
          ],
          ['/connectors/snowflake/replicate', 'Replication action'],
          [
            '/connectors/snowflake/new-row-trigger',
            'New row trigger'
          ],
          [
            '/connectors/snowflake/updated-row-trigger',
            'New/updated row trigger'
          ]
        ]
      },
      ['/connectors/splunk', 'Splunk'],
      {
        title: 'SQL Server',
        path: '/connectors/mssql',
        children: [
          ['/connectors/mssql/introduction', 'Introduction'],
          ['/connectors/mssql/new-row-trigger', 'New row trigger'],
          [
            '/connectors/mssql/updated-row-trigger',
            'New/updated row trigger'
          ],
          ['/connectors/mssql/scheduled-query-trigger', 'Scheduled query trigger'],
          ['/connectors/mssql/select', 'Select actions'],
          ['/connectors/mssql/insert', 'Insert actions'],
          ['/connectors/mssql/update', 'Update actions'],
          ['/connectors/mssql/upsert', 'Upsert actions'],
          ['/connectors/mssql/delete', 'Delete actions'],
          ['/connectors/mssql/run_sql', 'Run custom SQL action'],
          [
            '/connectors/mssql/stored-procedure',
            'Execute stored procedure'
          ],
          ['/connectors/mssql/best-practices', 'Best Practices'],
          ['/connectors/database-common-use-cases', 'Use cases'],
          ['/connectors/mssql/trouble-shooting', 'Troubleshooting']
        ]
      },
      ['/connectors/surveymonkey', 'SurveyMonkey'],
      {
        title: 'Webhooks',
        path: '/connectors/workato-webhooks',
        children: [
          [
            '/connectors/workato-webhooks/wizard',
            'Setup using wizard'
          ],
          [
            '/connectors/workato-webhooks/config',
            'Configuration options'
          ],
          [
            '/connectors/workato-webhooks/common-errors',
            'Debug common errors'
          ]
        ]
      },
      {
        title: 'Workday',
        path: '/connectors/workday',
        children: [
          [
            '/connectors/workday/connection_setup',
            'Connection setup'
          ],
          [
            '/connectors/workday/scheduled_report',
            'Scheduled report'
          ],
          ['/connectors/workday/get_report', 'Get report'],
          ['/connectors/workday/call_operation', 'Call operation'],
          [
            '/connectors/workday/get-custom-objects',
            'Get custom object'
          ],
          [
            '/connectors/workday/update-custom-objects',
            'Create/update custom object'
          ],
          ['/connectors/workday/workday_raas', 'Report-as-a-Service']
        ]
      },
      {
        title: 'Workday REST',
        path: '/connectors/workday-rest',
        children: [
          [
            '/connectors/workday-rest/connection-setup',
            'Connection setup'
          ],
          [
            '/connectors/workday-rest/new-worker-trigger',
            'New worker'
          ],
          [
            '/connectors/workday-rest/get-worker-action',
            'Get worker by ID'
          ],
          [
            '/connectors/workday-rest/search-worker-action',
            'Search workers'
          ],
          [
            '/connectors/workday-rest/create-job-change-action',
            'Create a job change'
          ],
          [
            '/connectors/workday-rest/get-inbox-tasks-action',
            'Get inbox task(s)'
          ],
          [
            '/connectors/workday-rest/approve-reject-inbox-task-action',
            'Approve/reject inbox task'
          ]
        ]
      },
      {
        title: 'Wrike',
        path: '/connectors/wrike',
        children: [
          [
            '/connectors/wrike#how-to-connect-to-wrike-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/wrike/new-comment-trigger',
            'New comment trigger'
          ],
          [
            '/connectors/wrike/updated-folder-trigger',
            'New/updated folder trigger'
          ],
          [
            '/connectors/wrike/updated-project-trigger',
            'New/updated project trigger'
          ],
          [
            '/connectors/wrike/updated-timelog-trigger',
            'New/updated timelog trigger'
          ],
          [
            '/connectors/wrike/create-comment-action',
            'Create comment action'
          ],
          [
            '/connectors/wrike/create-folder-action',
            'Create folder action'
          ],
          [
            '/connectors/wrike/create-project-action',
            'Create project action'
          ],
          [
            '/connectors/wrike/create-task-action',
            'Create task action'
          ],
          [
            '/connectors/wrike/create-timelog-action',
            'Create timelog action'
          ],
          [
            '/connectors/wrike/copy-folder-action',
            'Copy folder action'
          ],
          [
            '/connectors/wrike/copy-project-action',
            'Copy project ation'
          ],
          [
            '/connectors/wrike/get-folder-by-id-action',
            'Get folder by ID action'
          ],
          [
            '/connectors/wrike/get-task-by-id-action',
            'Get task by ID action'
          ],
          [
            '/connectors/wrike/search-folders-action',
            'Search folders action'
          ],
          [
            '/connectors/wrike/search-projects-action',
            'Search projects action'
          ],
          [
            '/connectors/wrike/search-tasks-action',
            'Search tasks action'
          ],
          [
            '/connectors/wrike/search-timelogs-action',
            'Search timelogs action'
          ],
          [
            '/connectors/wrike/update-folder-action',
            'Update folder action'
          ],
          [
            '/connectors/wrike/update-project-action',
            'Update project action'
          ],
          [
            '/connectors/wrike/update-task-action',
            'Update task action'
          ],
          [
            '/connectors/wrike/update-timelog-action',
            'Update timelog action'
          ]
        ]
      },
      {
        title: 'Zendesk',
        path: '/connectors/zendesk',
        children: [
          [
            '/connectors/zendesk#how-to-connect-to-zendesk-on-workato',
            'Connection setup'
          ],
          {
            title: 'Triggers',
            path: '/connectors/zendesk/trigger-summary',
            children: [
              [
                '/connectors/zendesk/new-ticket-trigger',
                'New ticket trigger'
              ],
              [
                '/connectors/zendesk/updated-ticket-trigger',
                'New/updated ticket trigger'
              ],
              [
                '/connectors/zendesk/new-user-trigger',
                'New user trigger'
              ],
              [
                '/connectors/zendesk/updated-user-trigger',
                'New/updated user trigger'
              ],
              [
                '/connectors/zendesk/new-organization-trigger',
                'New organization trigger'
              ],
              [
                '/connectors/zendesk/updated-organization-trigger',
                'New/updated organization trigger'
              ],
              [
                '/connectors/zendesk/updated-record-trigger',
                'New/updated record trigger'
              ]
            ]
          },
          {
            title: 'Create actions',
            path: '/connectors/zendesk/create-action-summary',
            children: [
              [
                '/connectors/zendesk/create-ticket-action',
                'Create ticket'
              ],
              [
                '/connectors/zendesk/create-user-action',
                'Create user'
              ],
              [
                '/connectors/zendesk/create-organization-action',
                'Create organization'
              ],
              [
                '/connectors/zendesk/update-record-action',
                'Create/update record'
              ],
              [
                '/connectors/zendesk/create-organization-membership-action',
                'Create organization membership'
              ],
              [
                '/connectors/zendesk/create-custom-object-record-action',
                'Create custom object record'
              ],
              [
                '/connectors/zendesk/create-relationship-record-action',
                'Create relationship record'
              ]
            ]
          },
          {
            title: 'Get actions',
            path: '/connectors/zendesk/get-action-summary',
            children: [
              [
                '/connectors/zendesk/search-tickets-action',
                'Search tickets'
              ],
              [
                '/connectors/zendesk/get-tickets-by-external-id-action',
                'Get list of tickets by external ID'
              ],
              [
                '/connectors/zendesk/get-ticket-details-by-id-action',
                'Get ticket details by ID'
              ],
              [
                '/connectors/zendesk/get-comments-for-ticket-action',
                'Get comments for ticket'
              ],
              [
                '/connectors/zendesk/search-users-action',
                'Search users'
              ],
              [
                '/connectors/zendesk/get-user-details-by-id-action',
                'Get user details by ID'
              ],
              [
                '/connectors/zendesk/list-user-identities-action',
                'List user identities'
              ],
              [
                '/connectors/zendesk/search-organizations-action',
                'Search organizations'
              ],
              [
                '/connectors/zendesk/search-organization-member-action',
                'Search organization member'
              ],
              [
                '/connectors/zendesk/get-organization-by-external-id-action',
                'Get organization by external ID'
              ],
              [
                '/connectors/zendesk/get-organization-details-by-id-action',
                'Get organization details by ID'
              ],
              [
                '/connectors/zendesk/get-list-of-custom-object-records-by-external-id-action',
                'Get list of custom object records by external ID'
              ],
              [
                '/connectors/zendesk/get-custom-object-record-by-id-action',
                'Get custom object record by ID'
              ],
              [
                '/connectors/zendesk/get-relationship-records-action',
                'Get relationship records'
              ]
            ]
          },
          {
            title: 'Update actions',
            path: '/connectors/zendesk/update-action-summary',
            children: [
              [
                '/connectors/zendesk/update-ticket-action',
                'Update ticket'
              ],
              [
                '/connectors/zendesk/update-ticket-action#bulk-update-tickets-action',
                'Bulk update tickets'
              ],
              [
                '/connectors/zendesk/solve-ticket-action',
                'Solve ticket'
              ],
              [
                '/connectors/zendesk/update-user-action',
                'Update user'
              ],
              [
                '/connectors/zendesk/update-organization-action',
                'Update organization'
              ],
              [
                '/connectors/zendesk/updated-record-trigger',
                'New/updated record trigger'
              ],
              [
                '/connectors/zendesk/update-custom-object-record-action',
                'Update custom object record'
              ]
            ]
          },
          {
            title: 'Delete actions',
            path: '/connectors/zendesk/delete-action-summary',
            children: [
              [
                '/connectors/zendesk/delete-ticket-action',
                'Delete ticket'
              ],
              [
                '/connectors/zendesk/delete-custom-object-record-action',
                'Delete custom object record by ID'
              ],
              [
                '/connectors/zendesk/delete-relationship-record-by-id-action',
                'Delete relationship record by ID'
              ]
            ]
          },
          ['/connectors/zendesk/ticket-fields', 'Ticket fields'],
          ['/connectors/zendesk/user-fields', 'User fields'],
          [
            '/connectors/zendesk/organization-fields',
            'Organization fields'
          ],
          [
            '/connectors/zendesk/custom-objects',
            'Zendesk custom objects'
          ]
        ]
      },
      {
        title: 'Zoom',
        path: '/connectors/zoom',
        children: [
          [
            '/connectors/zoom#how-to-connect-to-zoom-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/zoom/new-event-trigger',
            'New events (Meeting, Webinar etc)'
          ],
          [
            '/connectors/zoom/event-actions',
            'Schedule meetings and webinars'
          ],
          [
            '/connectors/zoom/registrant-actions',
            'Add or retrieve registrants'
          ],
          [
            '/connectors/zoom/user-actions',
            'Add, update or remove users'
          ],
          [
            '/connectors/zoom/cloud-recording',
            'Download cloud recordings'
          ],
          [
            '/connectors/zoom/best-practices',
            'Best Practices'
          ],
        ]
      },
      {
        title: 'Zuora',
        path: '/connectors/zuora',
        children: [
          [
            '/connectors/zuora#how-to-connect-to-zuora-on-workato',
            'Connection setup'
          ],
          [
            '/connectors/zuora/create_record',
            'Create record'
          ],
          [
            '/connectors/zuora/update_record',
            'Update record'
          ],
          [
            '/connectors/zuora/search_record',
            'Search record'
          ],
          [
            '/connectors/zuora/query_record',
            'Query record'
          ]
        ]
      }
    ]
  },
  {
    title: 'Developing connectors',
    path: '/developing-connectors',
    children: [
      ['/developing-connectors/custom-actions', 'Custom actions'],
      [
        '/developing-connectors/registering-new-client',
        'Registering new client'
      ],
      ['/developing-connectors/http-vs-sdk', 'HTTP vs SDK'],
      {
        title: 'HTTP connector',
        path: '/developing-connectors/http-v2',
        children: [
          [
            '/developing-connectors/http/connection-setup',
            'Connection setup'
          ],
          [
            '/developing-connectors/http/building-http-trigger',
            'Building a HTTP trigger'
          ],
          [
            '/developing-connectors/http/building-http-action',
            'Building a HTTP action'
          ]
        ]
      },
      {
        title: 'HTTP connector (deprecated)',
        path: '/developing-connectors/http',
        children: [
          [
            '/developing-connectors/http#set-up-your-oauth2-connection',
            'OAuth2 connection setup (deprecated)'
          ],
          [
            '/developing-connectors/http#example-connecting-to-eventbrite-via-oauth2',
            'Example: Eventbrite OAuth2'
          ],
          [
            '/developing-connectors/http#set-up-your-non-oauth2-connection',
            'Non-OAuth2 connection setup (deprecated)'
          ],
          [
            '/developing-connectors/http#example-connecting-to-jira-via-basic-authentication-and-testing-the-connection-via-a-get-action',
            'Example: Jira basic auth'
          ],
          [
            '/developing-connectors/http#building-webhook-triggers',
            'Webhook triggers'
          ],
          [
            '/developing-connectors/http#example-building-a-new-order-trigger-in-eventbrite',
            'Example: New Eventbrite order'
          ],
          [
            '/developing-connectors/http#building-your-rest-request-action',
            'HTTP actions (deprecated)'
          ],
          [
            '/developing-connectors/http#example-building-a-get-order-details-action-in-eventbrite',
            'Example: Get Eventbrite order'
          ],
          [
            '/developing-connectors/http#example-building-a-create-project-action-in-jira',
            'Example: Create Jira project'
          ]
        ]
      }
    ]
  },
  {
    title: 'Connector SDK',
    path: '/developing-connectors/sdk',
    children: [
      [
        '/developing-connectors/sdk/quick-Start',
        'Platform Quick start'
      ],
      ['/developing-connectors/sdk/sdk-conceptual-model', 'Overview'],
      [
        '/developing-connectors/sdk/walk-through',
        'Walkthrough - Building your first connector!'
      ],
      {
        title: 'Data Format',
        path: '/developing-connectors/sdk/data-format',
        children: [
          [
            '/developing-connectors/sdk/data-format/json-format',
            'JSON'
          ],
          [
            '/developing-connectors/sdk/data-format/xml-format',
            'XML'
          ],
          [
            '/developing-connectors/sdk/data-format/request_format_multipart_form',
            'Multipart Form'
          ],
          [
            '/developing-connectors/sdk/data-format/form-url-encoded',
            'URL Encoded Form'
          ]
        ]
      },
      {
        title: 'Authentication',
        path: '/developing-connectors/sdk/authentication',
        children: [
          [
            '/developing-connectors/sdk/authentication/basic-authentication',
            'Basic Authentication'
          ],
          [
            '/developing-connectors/sdk/authentication/header-authentication',
            'Header Authentication'
          ],
          [
            '/developing-connectors/sdk/authentication/oauth2-authentication',
            'OAuth 2.0'
          ],
          [
            '/developing-connectors/sdk/authentication/custom-authentication',
            'Custom Authentication'
          ],
          [
            '/developing-connectors/sdk/authentication/test',
            'Testing your connection'
          ],
          [
            '/developing-connectors/sdk/authentication/base_uri',
            'Defining a base URI'
          ],
          [
            '/developing-connectors/sdk/authentication/secure_connection',
            'On premises connections'
          ]
        ]
      },
      ['/developing-connectors/sdk/action', 'Actions'],
      {
        title: 'Triggers',
        path: '/developing-connectors/sdk/trigger',
        children: [
          [
            '/developing-connectors/sdk/trigger/poll-trigger',
            'Polling triggers'
          ],
          [
            '/developing-connectors/sdk/trigger/static-webhook-trigger',
            'Static Webhook triggers'
          ],
          [
            '/developing-connectors/sdk/trigger/webhook-trigger',
            'Dynamic Webhook triggers'
          ]
        ]
      },
      [
        '/developing-connectors/sdk/http-requests-and-response-handling',
        'HTTP requests'
      ],
      [
        '/developing-connectors/sdk/object-definition',
        'Object definitions'
      ],
      [
        '/developing-connectors/sdk/pick-list',
        'Object definitions - Picklists'
      ],
      [
        '/developing-connectors/sdk/toggle-fields',
        'Object definitions - Toggle fields'
      ],
      [
        '/developing-connectors/sdk/config-fields',
        'Object definitions - Config fields'
      ],
      ['/developing-connectors/sdk/methods', 'Methods'],
      ['/developing-connectors/sdk/error-handling', 'Error handling'],
      {
        title: 'Best Practices',
        path: '/developing-connectors/sdk/best-practices',
        children: [
          [
            '/developing-connectors/sdk/best-practices#general-best-practices',
            'General best practices'
          ],
          {
            title: 'Block specific best practices',
            path: '/developing-connectors/sdk/best-practices#block-specific-best-practices',
            children: [
              [
                '/developing-connectors/sdk/best-practices#connection-block',
                'Connection block'
              ],
              [
                '/developing-connectors/sdk/best-practices#test-block',
                'Test block'
              ],
              [
                '/developing-connectors/sdk/best-practices#object-definitions',
                'Object definitions block'
              ],
              [
                '/developing-connectors/sdk/best-practices#actions',
                'Actions block'
              ],
              [
                '/developing-connectors/sdk/best-practices#triggers',
                'Triggers block'
              ],
              [
                '/developing-connectors/sdk/best-practices#sample-output',
                'Sample output block'
              ],
              [
                '/developing-connectors/sdk/best-practices#error-handling',
                'Error handling'
              ]
            ]
          },
          [
            '/developing-connectors/sdk/best-practices#usability-and-testing-best-practices',
            'Usability and testing best practices'
          ]
        ]
      },
      {
        title: 'Advanced connector guide',
        path: '/developing-connectors/cookbook/introduction',
        children: [
          [
            '/developing-connectors/cookbook/connector-planning',
            'Connector planning'
          ],
          [
            '/developing-connectors/cookbook/connector-building-defining-schema',
            'Architecture'
          ],
          [
            '/developing-connectors/cookbook/connector-building-building-actions',
            'Actions'
          ],
          [
            '/developing-connectors/cookbook/connector-building-building-triggers',
            'Triggers'
          ],
          [
            '/developing-connectors/cookbook/connector-building-code-patterns',
            'Common code patterns'
          ],
          [
            '/developing-connectors/cookbook/connector-building-usability-rules',
            'Usability rules'
          ]
        ]
      },
      ['/developing-connectors/sdk/examples', 'Examples']
    ]
  },
  {
    title: 'Custom OAuth profiles',
    path: '/custom-oauth-profiles',
    children: [
      [
        '/custom-oauth-profiles/slack-workbot-for-slack',
        'Slack & Workbot for Slack'
      ]
    ]
  },
  {
    title: 'Workato API',
    path: '/workato-api',
    children: [
      {
        title: 'Connections API',
        path: '/workato-api/connections',
        children: [
          [
            '/workato-api/connections#list-connections',
            'List Connections'
          ]
        ]
      },
      {
        title: 'Jobs API',
        path: '/workato-api/jobs',
        children: [
          [
            '/workato-api/jobs#list-jobs-from-a-recipe',
            'List jobs from a recipe'
          ]
        ]
      },
      {
        title: 'Recipes API',
        path: '/workato-api/recipes',
        children: [
          [
            '/workato-api/recipes#get-recipe-details',
            'Get recipe details'
          ],
          ['/workato-api/recipes#create-a-recipe', 'Create recipe'],
          ['/workato-api/recipes#update-a-recipe', 'Update recipe'],
          [
            '/workato-api/recipes#list-recipes-belonging-to-user',
            'List recipes'
          ],
          ['/workato-api/recipes#start-recipe', 'Start recipe'],
          ['/workato-api/recipes#stop-recipe', 'Stop recipe'],
          ['/workato-api/recipes#delete-recipe', 'Delete recipe']
        ]
      },
      {
        title: 'Users',
        path: '/workato-api/users',
        children: [
          ['/workato-api/users#get-user-details', 'Get user details']
        ]
      },
      {
        title: 'Recipe lifecycle management',
        path: '/workato-api/recipe-lifecycle-management',
        children: [
          [
            '/workato-api/recipe-lifecycle-management#export-package-based-on-a-manifest',
            'Export package'
          ],
          [
            '/workato-api/recipe-lifecycle-management#import-package-into-a-folder',
            'Import package'
          ],
          [
            '/workato-api/recipe-lifecycle-management#get-package-by-id',
            'Get package by ID'
          ],
          [
            '/workato-api/recipe-lifecycle-management#download-package',
            'Download package'
          ]
        ]
      },
      {
        title: 'OEM Vendor APIs',
        path: '/oem/oem-api/oem-vendor-apis',
        children: [
          [
            '/oem/oem-api/adapters',
            'Connectors'
          ],
          [
            '/oem/oem-api/connections',
            'Connections'
          ],
          [
            '/oem/oem-api/picklists',
            'Picklists'
          ],
          [
            '/oem/oem-api/folders',
            'Folders'
          ],
          [
            '/oem/oem-api/managed-users',
            'Manage customer accounts'
          ],
          [
            '/oem/oem-api/recipes',
            'Recipes'
          ],
          [
            '/oem/oem-api/recipe-lifecycle-management',
            'Recipe lifecycle management'
          ]
        ]
      }
    ]
  },
  {
    title: 'Security',
    path: '/security',
    children: [
      ['/security/ip-whitelists', 'IP whitelists'],
      [
        '/security/two-factor-authentication',
        'Two-factor authentication'
      ],
      {
        title: 'Data protection',
        path: '/security/data-protection',
        children: [
          [
            '/security/data-protection/data-retention-faq',
            'Data retention'
          ],
          {
            title: 'Encryption key management',
            path: '/security/data-protection/encryption-key-management',
            children: [
              [
                '/security/data-protection/encryption-key-management/key-rotation',
                'Key rotation'
              ]
            ]
          }
        ]
      }
    ]
  },
  ['/product-updates', 'Product Updates'],
  ['/contact-us', 'Contact us']
];
