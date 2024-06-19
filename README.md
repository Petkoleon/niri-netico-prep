# README #

**Embedded systems Java + Tomcat + React setup POC**
The main idea of this POC project is to become familiar with embedded systems limitations, amd to understand what system
resources are necessary to meet minimum requirements Java + React + MariaD + Tomcat application to be optimally run on arm64 based
systems.


## Technology Information


### Version Control

We use BitBucket for version control. The main code of the project can be found at the following repository:

    https://bitbucket.org/niri-netico/niri-netico-prep/src/main/

For opening BitBucket account contact MarkoS.


### Nexus

We use Nexus repository manager to storing build artifacts.

Nexus can be only accessed from the internal network at: http://192.168.169.120:9090/.
Credentials to access Nexus repository are:

* Username: admin
* Password: nexus123

Changes for maven's settings.xml can be find in project root settings.xml file.

//todo: give more details on what artefacts will be build as native Java builds will be done


### CI/CD pipeline
https://bitbucket.org/blog/announcing-support-for-linux-arm-runners-in-bitbucket-pipelines
//todo: add details how to build/deploy native Java built application


### Technology stack

* Java 17
* Maven
* SpringBoot 3
* React
* Tomcat
* Database: MariaDB


### Running the project locally
//todo: how to run project locally


### SonarQube
//todo: will we use SonarQube for this project? if answer is positive, upgrade document with details


## Knowledge sharing


### What is arm64 architecture processors family
//todo: add content


### How to build Java native application
In order to build Java native application for Windows (.exe), navigate to the root of "niri-netico-prep" project and run the following command:
**.\mvnw -Pnative package**. It will build .exe file in the netico-demo-backend target folder, which you can simply open on Windows and the application will run instantly.


### How to optimize Java application build with native build tools
//todo: explain what is native Java 


#### GraalVM
https://www.graalvm.org/latest/docs/introduction/
//todo: add content


#### Maven plugin for GraalVM
https://graalvm.github.io/native-build-tools/latest/maven-plugin.html
//todo: add content

## Useful links
//todo: add content
