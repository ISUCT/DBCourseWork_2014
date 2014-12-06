/**
 * 
 * @author jskonst
 */
function dateUsageSample() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

var myCallback = function(param){
        Logger.info("here");
        Logger.info(param.begdate);
        Logger.info(param.enddate);
        form.label.text = param.begdate;
        form.label1.text = param.enddate;
};

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
       var dUtilsGui = new PeriodSelector();
      dUtilsGui.showModal(myCallback);
  
      
    }//GEN-LAST:event_buttonActionPerformed
}
