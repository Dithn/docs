---
title: Workato connectors - Zoom Download cloud recording
date: 2018-03-23 06:00:00 Z
---

# Zoom - Download a cloud recording
This action allows you to download cloud recordings directly from Zoom and send them to downstream applications. When cloud recordings are finished in Zoom, you can send them to CRM tools like Salesforce so the recordings for a sales call can be at a salesperson's fingertips.

![Cloud recording](~@img/zoom/cloud-recording.png)
<center><i>Download a cloud recording from Zoom</i></center>

## Configuring the action
When configuring this action, you'll be prompted to provide 2 inputs. The `Download URL` for a particular Zoom cloud recording. Take note that each cloud recorded meeting or webinar has various files associated with it. These correspond to the `audio`, `video`, `text` and `transcript` files. Each of these files will have their own download URL.

These download URLs can be found in the output of the following triggers and actions:
* New cloud recording completed
* New cloud recording transcript completed
* Get cloud recording

Under the output of each of these triggers and actions, you will find a list called `Recording files` which represents the list of cloud recording files for this particular cloud recording. When using the **New cloud recording completed** trigger, you'll find that the output comes with a download token. This token allows you to download this cloud recording even if it is password protected (which is a recommended default for security.) This token expires in 24hours after the recording is finished.

## Retrieving cloud recording files on demand
In cases where your cloud recordings are protected and no download token is available (or if the token has expired), you will have to configure the a JWT app in the Zoom marketplace for Workato to generate a new download token for you. After you have created a new JWT app by following the instructions [here](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app), provide Workato with your JWT app's key and secret in the connection properties.

After this is configured, there will be no need to provide inputs for the download token input field in this action. Workato will automatically help you generate these download tokens.
