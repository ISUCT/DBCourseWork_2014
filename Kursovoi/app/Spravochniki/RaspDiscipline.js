/**
 * 
 * @author ageevatn
 */
function RaspDiscipline() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.requery(/*function(){}*/);
    
    // TODO : place your code here
    form.btnInsert.onActionPerformed = function(event) {
        model.qRaspDiscipline.insert();
    };
    
    form.btnDelete.onActionPerformed = function(event) {
        model.qRaspDiscipline.deleteRow();
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
    form.button.onActionPerformed = function(event) {
        var numhour = new NumHour(model.qRaspDiscipline.cursor.raspdisciplines_id);
       numhour.show();
    };
}
