/**
 * 
 * @author ageevatn
 */
function Additional(teacherId) {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    var teacherId = teacherId;
    model.qAdditional.params.teacherID = teacherId;
    model.requery(function () {
        if (model.qAdditional.size == 0 ){
            model.qAdditional.insert(model.qAdditional.schema.additionalinformation_id, teacherId);
        }
    }, function (e) {
        P.Logger.info(e);
    });

    self.show = function () {
        form.show();
    };

    // TODO : place your code here
    form.btnInsert.onActionPerformed = function (event) {
        model.qAdditional.push({});
    };

    form.btnDelete.onActionPerformed = function (event) {
        if (confirm("Delete?")) {
        for (var i in form.modelGrid.selected) {
            model.qAdditional.splice(model.qAdditional.indexOf(form.modelGrid.selected[i]), 1);
        }
    }
    };

    form.btnSave.onActionPerformed = function (event) {
        model.save();
    };
}
