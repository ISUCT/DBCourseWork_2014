/**
 * 
 * @author ageevatn
 */
function Years() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.requery(/*function(){}*/);
    
    // TODO : place your code here
    form.btnInsert.onActionPerformed = function(event) {
        model.qYears.insert();
    };
    
    form.btnDelete.onActionPerformed = function(event) {
        model.qYears.deleteRow();
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
