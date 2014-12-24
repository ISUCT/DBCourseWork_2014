/**
 * 
 * @author ageevatn
 */
function DirectionDiscipline() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.requery(/*function(){}*/);
    
    // TODO : place your code here
    form.btnInsert.onActionPerformed = function(event) {
        model.qDirectionDiscipline.insert();
    };
    form.btnDelete.onActionPerformed = function(event) {
        model.qDirectionDiscipline.deleteRow();
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
