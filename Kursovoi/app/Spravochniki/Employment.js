/**
 * 
 * @author ageevatn
 */
function Employment() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.requery(/*function(){}*/);
    
    form.btnInsert.onActionPerformed = function(event) {
        model.qEmployment.insert();
    };
    form.btnDelete.onActionPerformed = function(event) {
        model.qEmployment.deleteRow();
    };
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
