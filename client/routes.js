Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function (){
	this.render('home');
});

Router.route('/admin', function (){
	this.render('admin');
});

Router.route('/projects', function () {
	this.render('projects');
})

Router.route('/contact', function () {
	this.render('contact');
})