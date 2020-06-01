module.exports = function(plop) { // Plop object for building generators.
  plop.setGenerator('blog', { // Name of the generator.
    description: 'Write a new blog entry.', // Description of the generator.
    prompts: [
      // Blog name
      {
        type: '', // inquirer type
        name: '', // variable name
        message: '', // display message
      }, 
      //Blog description
      //Blog Content
    ],
    actions: function(data) { // Defines the actions to be taken.  Can be array.  Data is information collected in prompts.
      // Get the date in UTC.
      // Uses handlebars template.
      return [
        {
          type: '', // Type of action: add, modify, append
          path: '', // Where to put the generated file.
          template: ``, // Front matter: title, date description, and blog content
        },
      ];
    },
  });
}

