/**
 * 
 * @author jskonst
 */
function testSearch() {
    var self = this, model = this.model, form = this;
    model.params.Param1 = "%%";
    model.qStudents.params.sSurname = "%%";
    // TODO : place your code here

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        var searchString = form.textField.text;
        var searchString1 = form.textField1.text;
        model.params.Param1 = '%' + searchString+ '%';
        model.qStudents.params.sSurname = "%" + searchString1 + "%";
        model.requery();
    }//GEN-LAST:event_buttonActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
       model.save();
    }//GEN-LAST:event_button1ActionPerformed
}
