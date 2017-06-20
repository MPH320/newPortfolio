Router.configure({
	layoutTemplate: 'layout'
});

 Router.route('/', function () {    
      this.render('header', {to:"top"});
      this.render('home', {to:"bottom"});
    });

 Router.route('/admin', function () {    
      this.render('header', {to:"top"});
      this.render('admin', {to:"bottom"});
    });


 Router.route('/projects', function () {    
      this.render('header', {to:"top"});
      this.render('projects', {to:"bottom"});
    });

 Router.route('/contact', function () {    
      this.render('header', {to:"top"});
      this.render('contact', {to:"bottom"});
    });

 Router.route('/angular-jams', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('angular-jams', {to:"bottom"});
    });

 Router.route('/bloccit', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('bloccit', {to:"bottom"});
    });

 Router.route('/pong', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('pong', {to:"bottom"});
    });
