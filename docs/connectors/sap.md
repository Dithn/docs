---
title: Workato connectors - SAP On-premise
date: 2018-12-06 06:00:00 Z
---

# SAP On-premise
![SAP JCo connector](~@img/connectors/sap/sap-jco.png)

SAP is an enterprise resource planning software used by the largest corporations in the world.

Workato SAP On-premise connector allows you to connect with SAP system on-premises or on a server behind a corporate firewall. The connector supports using IDoc or RFC to communicate with SAP. Using Workato, you can build powerful automation around SAP and other applications, without writing a line of code.

## Supported SAP versions
Workato's On-premise SAP connector supports SAP ERP ECC 6.0 and later, SAP CRM, SAP SRM, SAP SCM, and any other modules compatible with the NetWeaver platform.

It requires the SAP Java Connector (JCo) to work. Please refer to [SAP Note 1077727 - SAP JCo 3.0 release and support strategy](https://launchpad.support.sap.com/#/notes/1077727) for details on JCo versions.

## Supported communication method
The connector supports the following communication methods with SAP:

- Inbound IDoc (send IDoc to SAP)
- Outbound IDoc (receive IDoc from SAP)
- Transactional RFC (invoke synchronous RFC and BAPI in SAP)

### Introduction to IDoc
The term `IDoc` stands for intermediate document. It is simply a data container used to exchange information between SAP systems or between SAP and 3rd-party systems.

IDoc is an open interface which is independent of the internal data structure stored in SAP, and independent of sending or receiving applications. Any application can use IDoc by following the syntax and semantics of IDoc.

IDoc is independent of the direction of data exchange, having both Outbound and Inbound capabilities.

### Introduction to RFC
`RFC` is a SAP protocol that handles communications between SAP systems and third party applications. It is the process of calling a function module which is residing on a different machine from the caller program.

Workato can call SAP RFCs in an SAP system to fetch the data returned or make synchronous updates to the SAP data. RFCs can also be configured to leveraged to call Workato directly from your SAP instance. Find out how to set up an API endpoint on Workato and [connect SAP directly to Workato here.](/connectors/sap/tls1.2.md#_2-adding-workato-ssl-certificates-to-trust-manager)

If you have trouble connecting to Workato via RFCs, please review the [Troubleshooting](#troubleshooting) section.

## How to connect to SAP On-premise on Workato

The SAP On-premise connector can connect to both on-premise SAP system and SAP system on a server behind the corporate firewall.

Please follow these steps **strictly in this sequence** to configure the connection:
- [I/ Configure IDoc and RFC in SAP](#configure-idoc-and-rfc-in-sap)
- [II/ Configure Workato On-prem agent on SAP server](#configure-workato-on-prem-agent-opa-on-sap-server)
- [III/ Configure SAP connector in Workato UI](#configure-sap-connector-in-workato-ui)

If you encounter error at any step, please review the [Troubleshooting](#troubleshooting) section.

### Configure IDoc and RFC in SAP
#### Step 1: Register a Program ID for Workato in SAPGUI
In SAP, use Transaction SM59 to create a new RFC Destination of type TCP/IP (type T). Select the `TCP/IP Connection` folder and select the `create` button.

![Create RFC connection](~@img/connectors/sap/rfc-connection-create.png)

In the Technical Settings tab, select the `Registered Server Program` option and provide the PROGRAM ID name which has been decided for Workato. This should be something unique to Workato.

![RFC destination](~@img/connectors/sap/rfc-destination.png)

Proceed to the `MDMP & Unicode` or `Unicode` tab. Make sure that the communication type is set to `Unicode`.

![RFC destination](~@img/connectors/sap/rfc-unicode.png)

Save and you should see your newly created RFC destination.

![RFC connections](~@img/connectors/sap/rfc-connection.png)

#### Step 2: Define a port for Workato
Use the transaction WE21 to define a port for sending and receiving IDocs of type `Transactional RFC`.

![IDoc ports](~@img/connectors/sap/idoc-ports.png)

When prompted for your port, you may either create a new port or have one generated for you. Remember to save this port as you will need it later on. Enter your `RFC Destination` created in the previous step. In this example, since we named the `RFC Destination` to "WORKATOTST", we will need to define the same in the `RFC Destination` input here.

![IDoc port for Workato](~@img/connectors/sap/idoc-port-workato.png)

> If you have no plans to use IDocs but only RFCs, you may skip along to step 6 where we show you how to configure Workato's OPA.

#### Step 3: Create Logical System for Workato
Use Transaction SALE and define Logical System

![Display IMG](~@img/connectors/sap/display-img.png)

Create a new Logical System to interface IDocs. The name selected for Logical System will be used for Partner Profile creation in the below steps.

![Display IMG](~@img/connectors/sap/logical-system.png)

#### Step 4: Create Partner Profile for Workato
Use Transaction WE20 to define a partner profile to send and receive the IDocs

![Partner profiles](~@img/connectors/sap/partner-profiles.png)

Create a partner profile of type Logical System and provide the same name as the Logical System. In this configuration, you define the `Message types` that you want to be sent and received from Workato system.

Outbound parameters correspond to IDocs sent from SAP to Workato whereas Inbound parameters correspond to IDocs sent from Workato to SAP.

Important Note: Only the `Message types` configured here will be available to use in Workato recipes.

![Message types](~@img/connectors/sap/message-types.png)

When prompted for the "Basic Type" of the Idoc meesage type, be sure to register all Idocs you plan to use individually. i.e. if you plan to use both `CREMAS01` and `CREMAS02` in the SAP new Idoc trigger on Workato, you will need to register `CREMAS` twice in the outbound parameters. For Idocs with extensions, be sure to enter in the extension as well.

![Outbound parameters](~@img/connectors/sap/outbound-parameter.png)

When prompted for your receiver port, provide the same port that was defined earlier on in step 2 and remember to toggle `Output Mode` to "Pass IDoc immediately".

#### Step 5: Create a distribution model for the partner and message type which will be interfaced with Workato
Use Transaction BD64 to create a Distribution Model for the IDocs which need to be interfaced with Workato system. The direction of flow for the IDocs are configured in this transaction based on the attributes Sender, Receiver and Message type.

Example:
- Sender : T90CLNT090 (SAP system)
- Receiver: WORKATOTST (Workato system/OPA Agent)
- Message Type: DEBMAS

The below configuration in the distribution model will enable SAP to send DEBMAS IDOCs to Workato. A Workato recipe will receive them using the `New IDoc` trigger.

![Distribution model](~@img/connectors/sap/distribution-model.png)

### Configure Workato On-prem Agent (OPA) on SAP server
#### Step 6: Download Workato On-prem Agent (OPA)
For Workato to talk to SAP, you need to install a Workato On-prem Agent (OPA) on your SAP server, or on a separate Virtual Machine that can reach your SAP server.

The Virtual Machine server and your SAP server need to be in the same domain, not outside of the firewall, and able to access each other (From each server, try to ping the other server to make sure they can reach each other).

Follow [these instructions](/on-prem/agents/setup.md) to download and setup Workato OPA.

#### Step 7: Download the SAP JCO libraries
If you do not already have a license to use SAP JCo libraries, please contact your SAP provider for license.

From the link below, download 2 items: SAP JCO connector libraries (**version 3.0 only**) and SAP Java IDoc class library (**version 3.0.XX only**). Please ensure that the correct Operating system is selected.

> Support for SAP JCO connector libraries version 3.1 and SAP Java IDoc class libraries 3.1.XX will be introduced in future iterations of the SAP connector.

https://support.sap.com/en/product/connectors/jco.html

Once the libraries are downloaded, place them in the `lib_ext/` directory of the OPA. If the `lib_ext` directory is not already created, please create it under the root directory of the OPA.

##### Windows users:
Move your OPA's `SAPConnector.jar` file in the `lib` folder to the `lib_ext` folder.

##### Mac users:
Ensure that you have imported all relevant files into the `lib_ext` folder except the `SAPConnector.jar` file. You should have imported a total of 3 files - `libsapjco3.jnilib`, `sapjco3.jar` and `sapidoc3.jar` into your `lib_ext` folder.

#### Step 8: Create SAP profile in OPA
Follow [these instructions](/on-prem/agents/profile.md#sap-profile) to create a SAP profile in OPA.

#### Step 9: Run OPA
Follow [these instructions](/on-prem/agents/run.md) to run the OPA. After it successfully runs, you can move on to set up the SAP connector in Workato.

### Configure SAP connector in Workato UI
#### Step 10: Connect to SAP from Workato

![SAP connection](~@img/connectors/sap/sap-jco-connection.png)

There are 2 ways to create a connection in Workato. Click on `App Connections` on the navigation bar and then on `Create a new connection`; or click on the `Connections` tab in a recipe with SAP triggers/actions. Then, follow the steps below:
- Select the connector `SAP On-premise`
- Input the OPA profile name for SAP you have created in previous step, in this case `Direct1`
- Select the OPA name, in this case `OPA @ BCone SAP`
- Click `Link your account`. If the connection is successful, you can start building recipes in Workato to talk to SAP.

### Troubleshooting
The followings are issues you may encounter during your setup. This list is constantly being updated. If you don't find your issue listed here, please contact Workato Support.

**After clicking `Link your account` in Workato, it fails to connect**

My OPA raises an error when attempting to connect to SAP. Check the logs of your OPA to know more.

> java.lang.UnsatisfiedLinkError: no sapjco3 in java.library.path

You may have downloaded the Java Connector for the wrong operating system. Ensure that you have downloaded and imported the correct SDK.

This error also shows on Mac OS systems if you have no imported the `libsapjco3.jnilib` into the `lib_ext` folder.

> Classpath entry lib/SAPConnector.jar not found, skipped.

For Mac users, there is no need to move the `SAPConnector.jar` to the `lib_ext` folder. Doing so will cause errors.

**After clicking `Link your account` in Workato, it fails to connect**
  This is often due to incorrect OPA configuration. Please check the SAP profile in the OPA's `config.yml` file for these errors:

  - `gwhost` is not accessible: In the machine that OPA is installed, use Terminal / Command Prompt to `ping` that `gwhost` and verify that it's accessible.

  - `gwserv` is wrong: Please make sure you input the correct gateway server port number.

**I don't see the needed IDocs in the dropdown list in Workato**

You need to [configure the needed IDoc in your SAP](#configure-idoc-and-rfc-in-sap) first, before it can be displayed in the dropdown list in Workato.

**I am unable to call Workato's API platform via RFC**

You may need additional configuration on your SAP system to enable TLS 1.2 if this hasn't been done already. Incoming web traffic to Workato is required TLS 1.2 encryption to better secure any information. [Find out how to enable TLS 1.2 and establish a connection to Workato here.](/connectors/sap/tls1.2.md)
