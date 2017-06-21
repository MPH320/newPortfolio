Router.configure({
	layoutTemplate: 'layout'
});

 Router.route('/', function () {    
      this.render('header', {to:"top"});
      this.render('projects', {to:"bottom"});
    });

 Router.route('/contact', function () {    
      this.render('header', {to:"top"});
      this.render('contact', {to:"bottom"});
    });

 Router.route('/angularjams', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('angularjams', {to:"bottom"});
    });

 Router.route('/bloccit', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('bloccit', {to:"bottom"});
    });

 Router.route('/pong', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('pong', {to:"bottom"});
    });

Router.route('/htmlshare', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('htmlshare', {to:"bottom"});
    });

Router.route('/blocjams', function () {    
      this.render('portfolioHeader', {to:"top"});
      this.render('blocjams', {to:"bottom"});
    });
