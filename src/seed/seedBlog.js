const blogs = [
  {
    title: "Javascript",
    body: `JavaScript has emerged as a ubiquitous and influential programming language, revolutionizing the way websites and web applications are built and experienced. From simple interactivity to complex user interfaces, JavaScript empowers developers to create dynamic, responsive, and engaging online experiences. In this blog, we will explore the diverse capabilities of JavaScript and its impact on modern web development.

  The Birth of JavaScript
  JavaScript was born in the mid-1990s, originally developed by Brendan Eich at Netscape Communications. Initially known as "LiveScript," it was later renamed JavaScript to capitalize on the popularity of Java at that time. JavaScript was designed to bring interactivity to web pages, allowing developers to add functionality and manipulate content on the client-side.
  
  Client-Side Magic: The DOM and Interactivity
  One of the most significant features of JavaScript is its ability to interact with the Document Object Model (DOM). The DOM represents the structure of a web page, and JavaScript enables developers to dynamically modify, add, or remove elements, transforming static HTML into dynamic and interactive user experiences. From validating forms to creating interactive sliders and carousels, JavaScript is the key player in modern web interactivity.
  
  The Rise of Frameworks and Libraries
  JavaScript's popularity soared with the emergence of numerous frameworks and libraries. These tools offer ready-made solutions, simplifying and speeding up development. Among them, React, Angular, and Vue.js stand out, each with its unique approach to building user interfaces. Frameworks like Node.js also extend JavaScript's domain to server-side development, allowing developers to create full-stack applications using a single language.
  
  Asynchronous Magic: AJAX and APIs
  JavaScript's asynchronous nature is a game-changer. It enables developers to perform tasks without blocking the execution of other operations, leading to smooth user experiences. The advent of AJAX (Asynchronous JavaScript and XML) allowed web pages to fetch and display data without requiring a page refresh, making web applications feel more like native desktop software.
  
  APIs (Application Programming Interfaces) further expanded JavaScript's capabilities, enabling developers to interact with external services and databases seamlessly. Integrating maps, social media feeds, and real-time data became a breeze, enhancing the overall functionality of web applications.
  
  Modern JavaScript: ES6 and Beyond
  ECMAScript 6 (ES6), also known as ECMAScript 2015, was a significant update to the JavaScript language, introducing new syntax and features. ES6 brought enhanced support for classes, arrow functions, template literals, and much more. Subsequent versions of ECMAScript have continued to bring improvements and new functionalities, making JavaScript more expressive, concise, and robust.
  
  The Challenges and the Future
  JavaScript's versatility comes with its own set of challenges, such as browser compatibility issues, security concerns, and the risk of code bloat. Nevertheless, the language has evolved remarkably, with efforts to address these challenges. Developers now have access to tools like Babel, Webpack, and ESLint, ensuring better code quality and compatibility.
  
  In the future, JavaScript is poised to remain at the forefront of web development. Innovations like WebAssembly promise even faster performance, while Progressive Web Apps (PWAs) aim to provide a native app-like experience directly in the browser. The JavaScript ecosystem is dynamic, with constant advancements and improvements, making it an exciting language to watch.
  
  Conclusion
  
  JavaScript's journey from a humble language for enhancing web interactivity to a powerful and versatile tool for modern web development is awe-inspiring. It has changed the way users interact with websites and applications, leading to more dynamic, engaging, and responsive online experiences. JavaScript's potential is limitless, and with ongoing advancements and community support, it will continue to shape the future of web development for years to come. Whether you're a seasoned developer or just starting, embracing JavaScript can unlock a world of possibilities and creativity. So, let's dive into the world of JavaScript and embark on an exciting journey of web development!`,
    slug: "javascript",
    author_id: "ef8eb644-c392-4bc7-bcc9-8eb6f3dee8db",
  },

  {
    title: "Typescript",
    body: `TypeScript has emerged as a powerful superset of JavaScript, adding static typing and various other features to the language we know and love. Developed and maintained by Microsoft, TypeScript brings the benefits of strong typing, enhanced code maintainability, and improved tooling to JavaScript developers. In this blog, we will explore the fundamentals of TypeScript and understand why it has become a preferred choice for modern web development.

  A Brief Overview of TypeScript
  TypeScript, first released in 2012, is an open-source language that compiles down to plain JavaScript. What sets it apart from JavaScript is its optional static typing. TypeScript introduces a type system that allows developers to define variable types during development. This static typing helps catch errors early in the development process and enhances code predictability and readability.
  
  Advantages of TypeScript
  a. Static Typing: TypeScript's static typing allows developers to define data types explicitly. This not only catches type-related errors during development but also makes the code more self-documenting and easier to maintain as the codebase grows.
  
  b. Code Readability: With type annotations, TypeScript code becomes more descriptive and easier to understand. Developers can quickly identify the expected types of variables and function parameters, leading to more readable and maintainable code.
  
  c. IDE Support and Tooling: TypeScript is well-supported by popular Integrated Development Environments (IDEs) like Visual Studio Code, WebStorm, and others. These IDEs provide rich intellisense, code completion, and error detection, making development more efficient and productive.
  
  d. Enhanced Developer Experience: With TypeScript, developers can leverage features like code refactoring, code navigation, and better error reporting, resulting in an improved overall development experience.
  
  e. Compatibility with JavaScript: Since TypeScript is a superset of JavaScript, existing JavaScript codebases can be easily migrated to TypeScript. Developers can gradually introduce typing and other TypeScript features without rewriting the entire codebase.
  
  Type Annotations and Interfaces
  TypeScript allows developers to explicitly define types using type annotations and interfaces. By specifying types, developers can enforce constraints on variables and functions, preventing runtime type errors and improving code reliability.
  
  Classes and Object-Oriented Programming
  TypeScript supports object-oriented programming concepts, such as classes, inheritance, and interfaces. This makes it easier for developers familiar with languages like Java or C# to transition to TypeScript and build more structured and organized applications.
  
  Advanced Features: Generics and Decorators
  TypeScript provides advanced features like generics and decorators. Generics enable the creation of reusable components that can work with a variety of data types. Decorators allow developers to modify classes and their properties, extending their behavior and enabling powerful metaprogramming capabilities.
  
  Compiler and Downleveling
  TypeScript code is transpiled to plain JavaScript using the TypeScript compiler (tsc). Developers can configure the compiler to target specific ECMAScript versions, enabling compatibility with older browsers and environments.
  
  Conclusion
  
  TypeScript has proven to be a game-changer in the world of web development. By introducing static typing and additional language features to JavaScript, TypeScript empowers developers to write more robust, reliable, and maintainable code. With its strong tooling support, seamless integration with existing JavaScript projects, and compatibility with modern JavaScript frameworks, TypeScript has quickly gained popularity among developers and companies worldwide. Embracing TypeScript opens up a new dimension of development possibilities, making it a valuable addition to any developer's toolkit. So, whether you are an experienced JavaScript developer or a newcomer, exploring TypeScript can undoubtedly elevate your coding experience and propel your web development projects to new heights.`,
    slug: "typescript",
    author_id: "ef8eb644-c392-4bc7-bcc9-8eb6f3dee8db",
  },

  {
    title: "Python",
    body: `Python, known for its simplicity and elegance, has become one of the most popular programming languages in the world. Developed in the late 1980s by Guido van Rossum, Python's design philosophy emphasizes code readability and a clean syntax, making it an ideal choice for beginners and experienced developers alike. In this blog, we will explore the key features and use cases of Python and understand why it has gained immense popularity across various domains.

  General-Purpose and Versatile
  Python is a general-purpose programming language, meaning it is designed to be flexible and applicable to a wide range of tasks. From web development to scientific computing, from automation to data analysis, Python can be used for almost any project. Its versatility makes it a go-to language for developers tackling diverse challenges.
  
  Beginner-Friendly and Readable Code
  Python's syntax is clear and concise, making it easy for newcomers to learn and understand. The language emphasizes human-readable code, reducing the learning curve for beginners and promoting collaborative development. The "Zen of Python" principles, accessible through the import this command, encapsulate the language's philosophy, emphasizing simplicity, clarity, and elegance.
  
  Abundant Standard Library and Third-Party Modules
  Python's standard library is extensive and well-documented, providing a broad range of built-in modules for tasks such as file handling, regular expressions, networking, and more. Additionally, the Python Package Index (PyPI) hosts a vast collection of third-party libraries and frameworks, empowering developers with ready-to-use tools for various tasks.
  
  Data Science and Machine Learning
  Python's popularity has surged in the field of data science and machine learning. Libraries like NumPy, Pandas, and Matplotlib provide robust data manipulation and visualization capabilities, while machine learning frameworks like TensorFlow and PyTorch enable the development of powerful machine learning models. Python's versatility and rich ecosystem have made it the de facto language for data-driven applications.
  
  Web Development with Django and Flask
  For web development, Python offers two powerful frameworks: Django and Flask. Django is a full-featured, high-level web framework that promotes rapid development and follows the "Don't Repeat Yourself" (DRY) principle. Flask, on the other hand, is a lightweight micro-framework that offers simplicity and flexibility, allowing developers to choose components based on their specific project needs.
  
  Automation and Scripting
  Python's ease of use and scripting capabilities make it an excellent choice for automation tasks. Whether automating repetitive processes, managing files, or performing system administration tasks, Python's concise syntax and vast library support streamline the development of automation scripts.
  
  Community and Support
  Python boasts a thriving and supportive community of developers, contributing to its continuous growth and improvement. The Python Software Foundation (PSF) oversees the language's development and maintains its integrity. Community-driven resources like online forums, tutorials, and conferences further enhance Python's accessibility and provide developers with valuable support.
  
  Conclusion
  
  Python's rise to prominence can be attributed to its simplicity, versatility, and an ever-growing ecosystem. Its easy-to-read syntax and beginner-friendly nature make it an excellent choice for newcomers, while its powerful capabilities and vast library support make it an invaluable tool for experienced developers tackling complex projects. Python's applications span from web development and data science to automation and machine learning, solidifying its position as a go-to language in various domains.
  
  Whether you are an aspiring programmer or a seasoned developer, Python offers a gateway to a world of possibilities. Embracing Python empowers developers to build elegant and efficient solutions, fostering creativity, and innovation in the ever-evolving landscape of programming. So, join the vibrant Python community, and embark on a journey that will open doors to new opportunities and a deeper appreciation for the art of programming.`,
    slug: "python",
    author_id: "c6691aee-a657-41f1-9122-c0dca9ef3152",
  },

  {
    title: "Nodejs",
    body: `Node.js, an open-source, cross-platform JavaScript runtime, has revolutionized web development by enabling server-side execution of JavaScript code. Developed by Ryan Dahl in 2009, Node.js utilizes the V8 JavaScript engine from Google Chrome, offering exceptional performance and scalability. In this blog, we will explore the key features of Node.js, its event-driven architecture, and the impact it has had on modern web application development.

  Event-Driven, Non-Blocking I/O
  One of Node.js's most significant advantages is its event-driven, non-blocking I/O model. Unlike traditional server-side technologies that follow a synchronous approach, Node.js employs an event loop, which allows it to handle concurrent connections efficiently. This design choice ensures that the server can process multiple requests simultaneously without being blocked, resulting in improved performance and responsiveness.
  
  Asynchronous Programming
  Node.js encourages developers to write asynchronous code, making it well-suited for real-time applications that involve frequent data exchange between clients and servers. By utilizing callbacks, Promises, or async/await syntax, developers can avoid blocking operations and optimize resource utilization.
  
  Package Manager: npm
  Node.js comes with npm (Node Package Manager), the largest ecosystem of open-source libraries and modules. With npm, developers can easily access thousands of pre-built modules to extend Node.js functionality and accelerate development. The vast npm repository covers a wide range of use cases, from HTTP servers and database connectors to utility functions and frameworks.
  
  Web Servers and APIs
  Node.js has emerged as an excellent choice for building web servers and RESTful APIs. Frameworks like Express.js simplify the process of defining routes, middleware, and handling HTTP requests and responses. The minimalist nature of Node.js allows developers to build lightweight and performant APIs, ideal for microservices architectures.
  
  Real-Time Applications with WebSocket Support
  Node.js excels in real-time application development, thanks to its WebSocket support. WebSockets enable bidirectional communication between the server and the client, facilitating the development of chat applications, gaming servers, live dashboards, and collaborative tools.
  
  Cross-Platform and Community-Driven
  Node.js's cross-platform nature allows it to run on various operating systems, including Windows, macOS, and Linux, making it highly versatile and accessible to developers. Moreover, Node.js benefits from a vibrant and active community that continuously contributes to its development, ensuring a rich ecosystem of libraries, tools, and resources.
  
  Scalability and Performance
  The non-blocking nature of Node.js, combined with its event-driven architecture, makes it highly scalable. Node.js can handle a large number of concurrent connections efficiently, making it an ideal choice for high-traffic web applications and real-time systems.
  
  Conclusion
  
  Node.js has transformed web development, providing a powerful and efficient platform for building scalable, real-time applications. With its event-driven, non-blocking I/O model, Node.js enables developers to create performant servers and APIs, catering to the demands of modern web applications. Its seamless integration with JavaScript on both the client and server sides allows developers to use the same language and share code across different layers of an application.
  
  The Node.js ecosystem, backed by the npm package manager and an active community, empowers developers with a vast array of tools and libraries to tackle various challenges. Whether you're building a web server, RESTful API, or real-time application, Node.js offers a solid foundation for developing cutting-edge solutions that deliver exceptional performance and responsiveness.
  
  As the web continues to evolve, Node.js will undoubtedly remain at the forefront of web development, driving innovation and powering the next generation of web applications. So, embrace the power of Node.js, and embark on a journey that will enable you to build dynamic, scalable, and real-time web experiences that captivate users and revolutionize the digital landscape.`,
    slug: "nodejs",
    author_id: "c6691aee-a657-41f1-9122-c0dca9ef3152",
  },

  {
    title: "Django",
    body: `Django, a high-level Python web framework, has earned a prominent place in the web development landscape since its release in 2005. Created by a group of developers at Lawrence Journal-World, Django follows the "batteries-included" philosophy, offering a comprehensive set of tools and functionalities out of the box. In this blog, we will explore the key features of Django, its Model-View-Template (MVT) architecture, and why it has become the framework of choice for developers building secure, scalable, and maintainable web applications.

  "Batteries-Included" Approach
  Django is renowned for its "batteries-included" approach, which means it provides a wide array of built-in features and libraries to streamline web development. From authentication and user management to URL routing, database abstraction, and form handling, Django's comprehensive nature saves developers valuable time, allowing them to focus on building core application logic.
  
  Model-View-Template (MVT) Architecture
  Django follows the Model-View-Template (MVT) architectural pattern, which is a slight variation of the popular Model-View-Controller (MVC) pattern. In the MVT architecture, the Model represents the data and database schema, the View handles the presentation logic, and the Template defines the user interface. This separation of concerns promotes code reusability and maintainability, making it easier to collaborate and scale projects.
  
  Object-Relational Mapping (ORM)
  Django's built-in Object-Relational Mapping (ORM) system allows developers to interact with the database using Python objects instead of raw SQL queries. This abstraction simplifies database operations and makes the code database-agnostic, enabling developers to switch between different database backends effortlessly.
  
  Admin Interface
  Django's automatic admin interface is a powerful tool that generates an admin panel for managing application data. With minimal configuration, developers get a user-friendly and customizable interface to perform CRUD (Create, Read, Update, Delete) operations on the application's models, significantly reducing the time and effort required for administrative tasks.
  
  URL Routing and Middleware
  Django's URL routing system maps URLs to specific views, making it easy to define application endpoints and handle HTTP requests. Middleware allows developers to add custom functionality to the request-response cycle, such as authentication checks, request parsing, and error handling.
  
  Template Language
  Django's template language simplifies the process of rendering dynamic HTML pages. The template language supports variables, filters, loops, and conditional statements, providing developers with a flexible and expressive toolset to generate dynamic content efficiently.
  
  Security and Built-in Protection
  Django places a strong emphasis on security. It includes built-in protection against common web application vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL injection. These security features reduce the risk of security breaches and ensure applications are robust and reliable.
  
  Community and Documentation
  Django boasts a large and active community of developers, contributing to its continuous improvement and evolution. The official documentation is comprehensive and well-maintained, providing extensive guides and tutorials to help developers at every skill level.
  
  Conclusion
  
  Django has cemented its position as a powerhouse in the world of web development, providing developers with a feature-rich and robust framework to build sophisticated web applications. Its "batteries-included" approach, MVT architecture, and built-in security features make it an attractive choice for both small-scale projects and large-scale applications.
  
  Whether you're building a content management system, an e-commerce platform, or a social networking site, Django's flexibility and versatility empower developers to create scalable, maintainable, and secure web applications with ease. Embrace Django's elegance and efficiency, and embark on a journey of web development that will elevate your projects to new heights of success and innovation.`,
    slug: "django",
    author_id: "ef8eb644-c392-4bc7-bcc9-8eb6f3dee8db",
  },
];

const query = require("./../database/queries/blogQueries");

async function seed_blog(client) {
  try {
    await client.connect();

    console.log("running...");

    const blog = await client.query(query.getBlogs, [10]);

    console.log(blog);
    if (!blog.rows.length) {
      for (let i = 0; i < blogs.length; i++) {
        const { title, body, slug, author_id } = blogs[i];
        console.log(title);
        await client.query(query.createBlog, [title, body, slug, author_id]);
      }
    } else {
      console.log("Data already exist in database...");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seed_blog;
