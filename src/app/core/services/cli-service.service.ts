import { compileInjectable } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CliServiceService {

  constructor() { }
  getTable(){
    return [
      {
        titre : "Install Angular CLI",
        code : 'npm install -g @angular/cli',
        description : "The npm install -g @angular/cli command is used to globally install the Angular CLI (Command Line Interface) package. This command allows you to access the Angular CLI from anywhere on your machine. The Angular CLI provides a set of powerful commands that streamline the development process for creating Angular applications. With the Angular CLI installed, you can easily scaffold new projects, generate components, services, and more, as well as run development servers, build and deploy your Angular applications. The global installation ensures that the Angular CLI is available as a command-line tool, allowing you to initiate and manage Angular projects with ease."
      },

      {
      titre : 'Create project',
      code : 'ng new name-of-the-project',
      description : 'The ng new name-of-the-project command is used to create a new Angular project with the specified name. This command sets up the basic structure and files needed to start building an Angular application. It creates a new directory with the project name and initializes the project with the necessary configuration files. The ng new command is often one of the first steps when starting a new Angular project, providing a solid foundation to begin development.',
    },
    {
      titre : 'Create a new module',
      code : 'ng g m name-of-the-middle',
      description : 'The ng g m name-of-the-middle command is used to generate a new Angular module. The g stands for "generate," and m indicates that we want to generate a module. By running this command, Angular CLI will create a new module file with the specified name, following the naming convention of "name-of-the-middle.module.ts". This module file serves as a container for organizing related components, directives, services, and other Angular artifacts. Creating a module helps in maintaining a modular and scalable project structure. It allows for better organization of code and provides a way to encapsulate related functionality. Modules also enable lazy loading, which improves the performance of your application by loading modules only when needed. In summary, the ng g m name-of-the-middle command is a quick way to generate an Angular module file, facilitating code organization and modular development.'
  },
  {
    titre: "Serve the application",
    code: "ng serve",
    description: "The `ng serve` command is used to build and serve your Angular application locally for development. When you run this command in the root directory of your Angular project, it compiles the application and launches a development server. The development server automatically reloads the application whenever you make changes to the source code. By default, the application is served at `http://localhost:4200/`, and you can view it in your web browser. This command is useful during the development process as it provides a convenient way to preview and test your application in real-time."
  },
  {
    titre: "Build the application",
    "code": "ng build",
    "description": "The `ng build` command is used to build your Angular application for production. It compiles the application and generates a set of static files that can be deployed to a web server. The command creates a `dist/` directory in your project's root folder, which contains the compiled and optimized files. By default, the build is targeted for the production environment. You can customize the build process by specifying different build options such as the target environment, output path, base URL, and more. Building the application prepares it for deployment and ensures that all dependencies are bundled correctly."
  },
  {
    "titre": "Generate a new component",
    "code": "ng g c name-of-the-component",
    "description": "The `ng g c name-of-the-component` command is used to generate a new Angular component. The `g` stands for 'generate,' and `c` indicates that we want to generate a component. Running this command creates a new component file with the specified name, following the naming convention of 'name-of-the-component.component.ts'. Additionally, it generates an associated template file, a style file, and updates the necessary module file to include the newly generated component. Components are the building blocks of Angular applications, representing reusable UI elements. They encapsulate logic and HTML templates, making it easier to manage and reuse code across different parts of your application."
  },
  {
    "titre": "Run unit tests",
    "code": "ng test",
    "description": "The `ng test` command is used to run unit tests for your Angular application. Angular CLI integrates with popular testing frameworks like Jasmine and Karma to provide a seamless testing experience. By default, the command launches the test runner, which runs all the unit tests defined in your project. It watches for any changes in your test files and re-runs the tests automatically. The test results are displayed in the console, showing which tests pass or fail. Unit testing is crucial for ensuring the quality and reliability of your application's codebase."
  },
  {
    "titre": "Run end-to-end tests",
    "code": "ng e2e",
    "description": "The `ng e2e` command is used to run end-to-end (e2e) tests for your Angular application. End-to-end tests simulate user interactions with your application to ensure that all parts are functioning correctly together. Angular CLI integrates with tools like Protractor to provide e2e testing capabilities. When you run this command, it launches the e2e test runner, which automates the interaction with your application in a real browser environment. The test results are displayed in the console, showing if all the e2e tests pass or fail. Running e2e tests helps in detecting and fixing any issues related to the application's behavior and user experience."
  },
  {
    "titre": "Update Angular dependencies",
    "code": "ng update",
    "description": "The `ng update` command is used to update the Angular dependencies in your project. Angular CLI provides a convenient way to check for available updates and apply them to your project. When you run this command, it checks for updates to Angular and other related packages installed in your project. It provides a summary of the available updates and allows you to choose which updates to apply. Keeping your project's dependencies up to date ensures that you have access to the latest features, bug fixes, and security patches provided by the Angular team."
  },
  {
    "titre": "Generate a new service",
    "code": "ng g s name-of-the-service",
    "description": "The `ng g s name-of-the-service` command is used to generate a new Angular service. Services in Angular are used to encapsulate reusable logic and provide data or functionality to other parts of your application. Running this command creates a new service file with the specified name, following the naming convention of 'name-of-the-service.service.ts'. Additionally, it updates the necessary module file to include the newly generated service. Services can be injected into components or other services, allowing for better code organization and separation of concerns."
  },
  {
    "titre": "Lint the code",
    "code": "ng lint",
    "description": "The `ng lint` command is used to run the linting process on your Angular project's code. Linting is a static analysis process that helps identify and enforce coding standards and best practices. Angular CLI integrates with popular linting tools like ESLint or TSLint to analyze your project's TypeScript and HTML files. When you run this command, it checks your code against a set of predefined rules and generates a report of any issues or violations found. Linting your code helps maintain consistent code style, improves code quality, and catches potential bugs or anti-patterns early in the development process."
  },

    {
      "titre": "Generate a new directive",
      "code": "ng g d name-of-the-directive",
      "description": "The `ng g d name-of-the-directive` command is used to generate a new Angular directive. Directives in Angular are used to modify the behavior or appearance of elements in the DOM. Running this command creates a new directive file with the specified name, following the naming convention of 'name-of-the-directive.directive.ts'. Additionally, it updates the necessary module file to include the newly generated directive. Directives can be used to create reusable custom behaviors or to extend existing HTML elements with additional functionality."
    },
    {
      "titre": "Run the application in a production-like environment",
      "code": "ng serve --prod",
      "description": "The `ng serve --prod` command is used to serve the Angular application in a production-like environment. When running the application with the `--prod` flag, Angular CLI enables production mode, which applies optimizations such as Ahead-of-Time (AOT) compilation and tree shaking. These optimizations result in a smaller bundle size and improved performance. Running the application in a production-like environment allows you to test its behavior and performance closer to the actual production setup."
    },
    {
      "titre": "Create a new component with a specific file extension",
      "code": "ng g c name-of-the-component --skip-tests --style=scss",
      "description": "The `ng g c name-of-the-component --skip-tests --style=scss` command is used to generate a new Angular component with specific options. In this example, the command generates a component file with the specified name, skips the generation of test files, and uses SCSS (Sass) as the style file extension. This command allows you to customize the component generation process based on your project's requirements. You can choose to include or exclude tests, specify a different style file extension (e.g., CSS, Less), or even provide additional options such as inline template or change detection strategy."
    },
    {
      "titre": "Create a new Angular library",
      "code": "ng generate library name-of-the-library",
      "description": "The `ng generate library name-of-the-library` command is used to create a new Angular library. Angular libraries are reusable code packages that can be shared across multiple projects. When you run this command, Angular CLI generates the necessary files and configuration to create a library. This includes a library root module, a public API file, and a builder configuration. Creating a library allows you to modularize and package common code, components, or services, making it easier to share and maintain code across different projects or teams."
    }
  ]
  }
  getTitle(){
    return [{
      "title" : "Welcome to Angular CLI Essentials!",
      "texte" : [
        "Angular CLI (Command Line Interface) is a vital tool for developing Angular applications with speed and efficiency. It provides a seamless experience by automating common tasks andoffering powerful command-line utilities.",
        "In this concise guide, we'll walk you through the essential features of Angular CLI. Whether you're a beginner or an experienced developer, you'll gain insights into project setup,code generation, testing, optimization, and more.",
        "By leveraging Angular CLI, you can streamline your development workflow, increase productivity, and build high-quality Angular applications with ease. Let's dive in and unlock the full potential of Angular CLI!",
      ]
    }
    ]
  }
}
