/**
 * 
 * @author jskonst
 */
function Faculty() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        model.qFaculty.insert();
    }//GEN-LAST:event_buttonActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        model.qFaculty.deleteRow();
    }//GEN-LAST:event_button1ActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        model.save();
    }//GEN-LAST:event_button2ActionPerformed
}
