/**
 * 
 * @author ageevatn
 */
function TeachersSearch() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    self.show = function () {
        form.show();
    };
    
    model.params.PName = "%%";
    
    model.requery(/*function(){}*/);
    
    // TODO : place your code here
    form.btnInsert.onActionPerformed = function(event) {
        model.qPoisk.insert();
    };
    
    form.btnDelete.onActionPerformed = function(event) {
        model.qPoisk.deleteRow();
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
    form.button.onActionPerformed = function(event) {
       var additional = new Additional(model.qPoisk.cursor.teachers_id);
       additional.show();
    };
    form.btnPoisk.onActionPerformed = function(event) {
        var search = form.textField.text;
        model.params.PName = "%" + search + "%";
        model.requery();
    };
}
