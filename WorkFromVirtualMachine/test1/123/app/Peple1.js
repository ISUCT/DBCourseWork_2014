/**
 * 
 * @author user
 */
function Peple1() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    
    model.requery(/*function(){}*/);
    
    //form.
    
    // TODO : place your code here
}
