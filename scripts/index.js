var viewModel= function() {
    var self = this;

    self.myClass = ko.observable("border-primary");

    self.borders = [
        "border-primary",
        "border-secondary",
        "border-success",
        "border-danger",
        "border-warning",
        "border-info",
        "border-light",
        "border-dark",
        "border-white"
    ];

    this.changeColor = function(className) {
        this.myClass(className);
    }
};
  
ko.applyBindings(viewModel);