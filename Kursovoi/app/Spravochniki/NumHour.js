/**
 * 
 * @author ageevatn
 */
function NumHour(raspdisciplineID) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var raspdisciplineID = raspdisciplineID;
    model.qNumHour.params.raspdisciplineID = raspdisciplineID;
    model.requery(function () {
        if (model.qNumHour.size == 0 ){
            model.qNumHour.insert(model.qNumHour.schema.numhour_id, raspdisciplineID);
        }
    }, function (e) {
        P.Logger.info(e);
    });
    
    self.show = function () {
        form.show();
    };
      
    // TODO : place your code here
    form.btnInsert.onActionPerformed = function(event) {
        model.qNumHour.insert(model.qNumHour.schema.numhour_id, raspdisciplineID);
    };
    
    form.btnDelete.onActionPerformed = function(event) {
        model.qNumHour.deleteRow();
    };
    
    form.btnSave.onActionPerformed = function(event) {
        model.save();
    };
}
