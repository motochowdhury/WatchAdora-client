import React from "react";

const Blogs = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto">
      <h1 className="text-orange-600 font-poppins text-3xl text-center my-10">
        Blogs
      </h1>
      <div className="grid lg:grid-cols-12 grid-cols-1 px-4 gap-4 w-[90%] mx-auto">
        <div className="bg-gray-100 p-4 lg:col-span-8">
          <h1 className="text-2xl font-poppins">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <div className="text-sm font-roboto text-gray-600 mt-5 space-y-2">
            <div>
              <p>
                React state management is a process for managing the data that
                React components need in order to render themselves. This data
                is typically stored in the component's state object. When the
                state object changes, the component will re-render itself.
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                there is there are 5 ways to manage state in React application.
                Those are:
              </p>
            </div>
            <div>
              <p>1. Logical State</p>
              <p>2. Server State</p>
              <p>3. Form State</p>
              <p>4. Navigation State</p>
              <p>5. Browser State</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 lg:col-span-4">
          <h1 className="text-2xl font-poppins">
            How does prototypical inheritance works?
          </h1>
          <div className="text-sm font-roboto text-gray-600 mt-5 space-y-2">
            <div>
              <p>
                The main idea of Prototypal Inheritance is that an object can
                point to another object and inherit all its properties. so that
                it allows multiple instances of an object to share common
                properties,
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                It is a feature of javascript which is a way to inherit
                properties from javascript as it is available in every function
                declaration. Prototypes is a simple way to share behavior and
                data between multiple objects access using .prototype
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  p-4 lg:col-span-4">
          <h1 className="text-2xl font-poppins">
            What is a unit test? Why should we write unit tests?
          </h1>
          <div className="text-sm font-roboto text-gray-600 mt-5 space-y-2">
            <div>
              <p>
                Unit testing is a software development process, that is check in
                which the smallest piece of code in parts of an application,
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                Unit testing is an important step in the development process, it
                can help detect early flaws in code which may be more difficult
                to find in later testing stages. And Developers can quickly make
                changes to the code base
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 lg:col-span-8">
          <h1 className="text-2xl font-poppins">React vs. Angular vs. Vue?</h1>
          <div className="text-sm font-roboto text-gray-600 mt-5 space-y-2">
            <div>
              <p>
                React, angular, vue is the most popular javascript library and
                framework for creating mobile, small-scale applications to
                building intuitive user interfaces for business web apps.
              </p>
            </div>
            <div>
              <p>
                <h2 className="text-orange-500 font-poppins text-md">React</h2>
                <p>
                  React is an open-source javascript library, maintained by
                  Facebook. To build modern interfaces react is very popular,
                  React framework also able to create apps for mobile and
                  desktop. React framework community is too large. And it’s
                  moderate to learn. React is a one-way data-binding framework.
                  Also, react processed by virtual dom.
                </p>
              </p>
            </div>
            <div>
              <p>
                <h2 className="text-orange-500 font-poppins text-md">
                  Angular
                </h2>
                <p>
                  Angular is also a TypeScript-based free and open-source web
                  application framework led by the Angular Team at Google and by
                  a community of individuals and corporations. It’s rendered by
                  real dom. And it’s able to bind data in two ways. React
                  framework community is also big. And angular allows us to
                  reuse code.
                </p>
              </p>
            </div>
            <div>
              <p>
                <h2 className="text-orange-500 font-poppins text-md">Vue</h2>
                <p>
                  vue.js is an open-source model–view–viewmodel front end
                  JavaScript framework for building user interfaces and
                  single-page applications. Its developed by evan, It’s also
                  allow us to use with javascript and typescript language. Vue
                  community is not much bigger but quit enough for a developer.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
