import { Injectable } from "@angular/core";
import { Course } from "../Models/course";
import { Observable } from "rxjs";

@Injectable()
export class CourseService{

    courses: Course[] = [
        { id: 1, title: 'Complete Modern JavaScript Course', price: 499, desc: "Embark on a journey into the dynamic world of JavaScript with our comprehensive course. Designed for beginners and intermediate learners alike, this course covers everything from the basics of variables and control flow to more advanced topics like asynchronous programming and modern ES6 syntax. With a focus on practical application, students will build a solid foundation in web development, gaining hands-on experience through projects and coding challenges. Whether you're aiming to become a full-stack developer or simply want to enhance your front-end skills, this course provides the tools and knowledge to succeed in today's digital landscape."
        , image: './../assets/courses/course1.jpg', rating: 4.5, duration: 18.2, author: 'Steve smith'},
        { id: 2, title: 'A complete Angular Course', price: 599, desc: "Angular is a client side framework which is used to develop Single Page Web Applications.The constantly evolving industry needs are demanding web designers & developers build unique ways of enhancing customer experience. This is where Angular development comes into the play.",
         image: './../assets/courses/course2.jpg', rating: 4.9, duration: 20.8, author: 'Sarah King'},
        { id: 3, title: 'A Complete Node JS Bootcamp', price: 449, desc: "Our Node.js course is designed to equip you with the skills needed to become proficient in server-side JavaScript development. Covering topics such as event-driven programming, asynchronous I/O, and building RESTful APIs, this course empowers you to create scalable and high-performance web applications. Through hands-on projects and real-world examples, you'll learn how to leverage the power of Node.js to build efficient backend systems, handle data streams, and deploy applications to production environments.", 
        image: './../assets/courses/course3.jpg', rating: 3.7, duration: 16.6, author: 'Mark Vought'},
        { id: 4, title: 'A Complete React Developer Course', price: 599, desc: "Our React.js course is tailored to equip you with the skills necessary to become proficient in building interactive user interfaces. From the fundamentals of React components and state management to advanced topics like Redux integration and server-side rendering, this course provides a comprehensive exploration of the React ecosystem. Through hands-on projects and practical exercises, you'll learn how to leverage React's declarative and component-based architecture to create scalable and maintainable web applications.",
         image: './../assets/courses/course4.jpg', rating: 4.8, duration: 28.2, author: 'Sarah King'},
        { id: 5, title: 'ASP.NET Core with Web API', price: 649, desc: "Our ASP.NET course offers a comprehensive exploration of Microsoft's powerful web development framework. From building dynamic web applications using ASP.NET MVC to creating robust backend services with ASP.NET Web API, this course covers the full spectrum of ASP.NET development. Through hands-on projects and practical exercises, students will gain proficiency in designing, developing, and deploying scalable web solutions using ASP.NET. Whether you're a beginner or an experienced developer looking to expand your skill set, this course provides the tools and knowledge needed to succeed in the world of ASP.NET development.", 
        image: './../assets/courses/course5.jpg', rating: 3.5, duration: 34.4, author: 'Steve smith'},
        { id: 6, title: 'Froentend Development with Vue.js', price: 329, desc: "Our Front End Development with Vue.js course is tailored to equip you with the skills necessary to become proficient in building modern, interactive user interfaces. From the basics of Vue.js syntax and component-based architecture to advanced topics like state management with Vuex and routing with Vue Router, this course offers a comprehensive exploration of front-end development using Vue.js. Through hands-on projects and practical exercises, you'll learn how to leverage Vue.js to create responsive and dynamic web applications, empowering you to excel in the ever-evolving field of front-end development.",
         image: './../assets/courses/course6.jpg', rating: 4.5, duration: 17.7, author: 'Steve smith'},
        { id: 7, title: 'A Complete Python Bootcamp', price: 469, desc: "Our Python course is designed to provide a comprehensive introduction to one of the most popular programming languages in the world. From the fundamentals of Python syntax and data structures to advanced topics like object-oriented programming and web development with Django, this course covers the full spectrum of Python programming. Through hands-on projects and interactive exercises, students will gain practical experience and confidence in writing efficient and scalable Python code, preparing them for a wide range of career opportunities in software development, data analysis, machine learning, and more.",
         image: './../assets/courses/course7.jpg', rating: 3.4, duration: 32.6, author: 'Mark Vought'},
        { id: 8, title: 'Machine Learning with Python', price: 1299, desc: "Our Machine Learning with Python course provides a comprehensive introduction to the exciting field of machine learning, empowering students to leverage Python's powerful libraries such as TensorFlow, scikit-learn, and Keras. From understanding foundational machine learning concepts like supervised and unsupervised learning to mastering advanced techniques like deep learning and neural networks, this course covers a wide range of topics essential for building intelligent systems. Through hands-on projects and real-world case studies, students will gain practical experience in implementing machine learning algorithms and developing predictive models, preparing them for rewarding careers in data science, AI, and beyond.", 
        image: './../assets/courses/course8.jpg', rating: 4.8, duration: 26.7, author: 'Sarah King'},
    ]

    getAllcourses(){
        return new Observable<Course[]>((sub) => {
            setTimeout(() => {
                sub.next(this.courses);
            }, 1000)
        })
    }
}