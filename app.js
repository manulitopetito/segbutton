/*global Ext:false */

var monat = new Array();
var jetzt = new Date();
var aktMonat = jetzt.getMonth();
monat[0] = "Januar";
monat[1] = "Februar";
monat[2] = "März";
monat[3] = "April";
monat[4] = "Mai";
monat[5] = "Juni";
monat[6] = "Juli";
monat[7] = "August";
monat[8] = "September";
monat[9] = "Oktober";
monat[10] = "November";
monat[11]= "Dezember";

Ext.application({
    launch: function() {
        var segmentedButton = new Ext.SegmentedButton({
            id: 'segButton',
			allowMultiple: true,
			allowToggle: false,
            items: [{
                id: 'prev',
				html: '<',
				style: 'width: 25px;',
				
            }, {
				id: 'month',
                html: monat[aktMonat],
                pressed: true,
				disabled: true
            }, {
                id: 'next',
				text: '>',
				style: 'width: 25px;',

            }],
            listeners: {
                toggle: function(container, button, pressed) {
					Ext.ComponentManager.get('segButton').setPressedButtons(['month']);
					
					if(button.id == "prev"){
						if(aktMonat > 0){	
							aktMonat = aktMonat-1;
							Ext.ComponentManager.get('month').setHtml(monat[aktMonat]);							
						}
					}
					if(button.id == "next"){
						if(aktMonat < 11){	
							aktMonat = aktMonat+1;
							Ext.ComponentManager.get('month').setHtml(monat[aktMonat]);							
						}
					}
       
                }
            }
        });
        Ext.Viewport.add({
            xtype: 'container',
            padding: 10,
            items: [segmentedButton]
        });
    }
});
