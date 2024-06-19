# [FE] NIRI Netico Demo

## Project Overview

[FE] NIRI Netico Demo POC is an Angular project aimed at demonstrating the proof of concept 
for various functionalities and integrations. This project includes essential scripts for 
development, building, and testing.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
  - [NgRx](#ngrx)
  - [ngx-gauge](#ngx-gauge)
- [DevDependencies](#devdependencies)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Testing](#testing)

## Installation

To get started with the project, clone the repository and install the dependencies using npm or yarn.

```sh
git clone https://<your-username>@bitbucket.org/niri-netico/niri-netico-prep.git
cd niri-netico-prep/netico-demo-frontend
npm install --legacy-peer-deps
```

## Scripts

The project includes several npm scripts for common tasks:

- **ng**: Shortcut for Angular CLI commands.
- **start**: Starts the development server.
- **build**: Compiles the application into an output directory.
- **watch**: Builds the application and watches for changes.
- **test**: Runs unit tests.

## Dependencies

The project relies on several key dependencies:

#### NgRx
NgRx is a framework for building reactive applications in Angular. 
It integrates with Angular to manage state in a reactive way. 
The key NgRx libraries included in this project are:

- **@ngrx/effects**: NgRx side effects management.
- **@ngrx/entity**: NgRx entity management.
- **@ngrx/store**: NgRx store for state management.
- **@ngrx/store-devtools**: NgRx store developer tools.

#### ngx-gauge
ngx-gauge is an Angular component for displaying gauges. 
It is useful for visualizing data in a gauge format.

You can configure various properties of the gauge component 
such as value, label, append, type, thick, cap, backgroundColor, and more.

```
<ngx-gauge 
  [value]="75" 
  [type]="'semi'" 
  [label]="'Speed'" 
  [append]="'km/h'" 
  [foregroundColor]="'#FF0000'"
  [backgroundColor]="'#E0E0E0'"
  [thick]="5"
  [cap]="'round'">
</ngx-gauge>
```

## DevDependencies

The project also includes several development dependencies for 
building, testing, and development support.

## Configuration

The project uses Angular CLI for configuration. Key configuration files include:

- **angular.json**: Angular CLI configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project metadata and dependencies.

## Running the Project

To run the development server, use the following command:

```
npm start
```

## Building the Project

To build the project, use the following command:

```
npm run build
```

The built files will be output to the dist/ directory.

## Testing

To run the unit tests, use the following command:

```
npm test
```

This will execute the tests using Karma and Jasmine.


