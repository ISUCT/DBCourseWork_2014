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
        model.qDirectionDiscipline.push({});
    };
    form.btnDelete.onActionPerformed = function(event) {
        var c = confirm("Delete?");
        if (c) {
        for (var i in form.modelGrid.selected) {
            model.qDirectionDiscipline.splice(model.qDirectionDiscipline.indexOf(form.modelGrid.selected[i]), 1);
        }
    }
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
