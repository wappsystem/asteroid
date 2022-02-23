(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    
    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"demo-asteroid-partb-screening"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            /*questionnaire_setup:"online-questionnaire-setup-canact",*/
                            online_questionnaire:"online-questionnaire"
                            
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"demo-asteroid-partb-screening"},
    m[p+"notes-data"]       ={url:H+"/form-grid/questionnaires/notes-data.html",Table:"demo-asteroid-partb-notes",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/questionnaires/notes-form.html",Table:"demo-asteroid-partb-notes"},
    m[p+"online-questionnaire"] ={url:I+"/participant.html"},
    m[p+"backend-panel"]    ={url:H+"/panels/backend-main.html", };
    m[p+"screening-data"]   ={url:H+"/form-grid/screening/eligibility-data.html",Table:"demo-asteroid-partb-screening",router:1 };
    m[p+"week-0-panel"]     ={url:H+"/panels/week-0.html"};
    m[p+"demographic-data"] ={url:H+"/form-grid/questionnaires/demographic-data.html",Table:"demo-asteroid-partb-demographic",form_module:"demographic-form", task_name:"Demographics" };
    m[p+"demographic-form"] ={url:H+"/form-grid/questionnaires/demographic-form.html",Table:"demo-asteroid-partb-demographic", task_name:"Demographics" };
    m[p+"isi-w0-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-screening",form_module:"isi-w0-form", task_name:"Insomnia Severity Index" };
    m[p+"isi-w0-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-screening", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w0-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w0",form_module:"psqi-w0-form", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w0-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w0", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"phq-w0-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-screening",form_module:"phq-w0-form", task_name:"Patient Health Questionnaire" };
    m[p+"phq-w0-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-screening", task_name:"Patient Health Questionnaire" };
    m[p+"gad7-w0-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w0",form_module:"gad7-w0-form", task_name:"Generalized Anxiety Disorder" };
    m[p+"gad7-w0-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w0", task_name:"Generalized Anxiety Disorder" };
    m[p+"ffs-w0-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w0",form_module:"ffs-w0-form", task_name:"Flinders Fatigue Scale" };
    m[p+"ffs-w0-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w0", task_name:"Flinders Fatigue Scale" };
    m[p+"ess-w0-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w0",form_module:"ess-w0-form", task_name:"Epworth Sleepiness Scale" };
    m[p+"ess-w0-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w0", task_name:"Epworth Sleepiness Scale" };
    m[p+"bc-cci-w0-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w0",form_module:"bc-cci-w0-form", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w0-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w0", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w0-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w0",form_module:"eq-5d-w0-form", task_name:"European Quality of Life" };
    m[p+"eq-5d-w0-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w0", task_name:"European Quality of Life" };
    m[p+"eheals-w0-data"]      ={url:H+"/form-grid/questionnaires/eheals-data.html",Table:"demo-asteroid-partb-eheals-w0",form_module:"eheals-w0-form", task_name:"eHealth Literacy Scale" };
    m[p+"eheals-w0-form"]      ={url:H+"/form-grid/questionnaires/eheals-form.html",Table:"demo-asteroid-partb-eheals-w0", task_name:"eHealth Literacy Scale" };

    m[p+"adverse-event-w3-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-data.html",Table:"demo-asteroid-partb-adverse-event-w3",form_module:"adverse-event-w3-form", task_name:"Adverse Event Check-in" };
    m[p+"adverse-event-w3-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-form.html",Table:"demo-asteroid-partb-adverse-event-w3", task_name:"Adverse Event Check-in" };

    m[p+"isi-w8-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w8",form_module:"isi-w8-form", task_name:"Insomnia Severity Index" };
    m[p+"isi-w8-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w8", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w8-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w8",form_module:"psqi-w8-form", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w8-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w8", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"phq-w8-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w8",form_module:"phq-w8-form", task_name:"Patient Health Questionnaire" };
    m[p+"phq-w8-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w8", task_name:"Patient Health Questionnaire" };
    m[p+"gad7-w8-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w8",form_module:"gad7-w8-form", task_name:"Generalized Anxiety Disorder" };
    m[p+"gad7-w8-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w8", task_name:"Generalized Anxiety Disorder" };
    m[p+"ffs-w8-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w8",form_module:"ffs-w8-form", task_name:"Flinders Fatigue Scale" };
    m[p+"ffs-w8-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w8", task_name:"Flinders Fatigue Scale" };
    m[p+"ess-w8-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w8",form_module:"ess-w8-form", task_name:"Epworth Sleepiness Scale" };
    m[p+"ess-w8-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w8", task_name:"Epworth Sleepiness Scale" };
    m[p+"bc-cci-w8-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w8",form_module:"bc-cci-w8-form", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w8-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w8", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w8-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w8",form_module:"eq-5d-w8-form", task_name:"European Quality of Life" };
    m[p+"eq-5d-w8-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w8", task_name:"European Quality of Life" };
    m[p+"adverse-event-w8-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-data.html",Table:"demo-asteroid-partb-adverse-event-w8",form_module:"adverse-event-w3-form", task_name:"Adverse Event Check-in" };
    m[p+"adverse-event-w8-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-form.html",Table:"demo-asteroid-partb-adverse-event-w8", task_name:"Adverse Event Check-in" };

    m[p+"isi-w16-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w16",form_module:"isi-w16-form", task_name:"Insomnia Severity Index" };
    m[p+"isi-w16-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w16", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w16-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w16",form_module:"psqi-w16-form", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w16-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w16", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"phq-w16-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w16",form_module:"phq-w16-form", task_name:"Patient Health Questionnaire" };
    m[p+"phq-w16-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w16", task_name:"Patient Health Questionnaire" };
    m[p+"gad7-w16-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w16",form_module:"gad7-w16-form", task_name:"Generalized Anxiety Disorder" };
    m[p+"gad7-w16-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w16", task_name:"Generalized Anxiety Disorder" };
    m[p+"ffs-w16-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w16",form_module:"ffs-w16-form", task_name:"Flinders Fatigue Scale" };
    m[p+"ffs-w16-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w16", task_name:"Flinders Fatigue Scale" };
    m[p+"ess-w16-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w16",form_module:"ess-w16-form", task_name:"Epworth Sleepiness Scale" };
    m[p+"ess-w16-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w16", task_name:"Epworth Sleepiness Scale" };
    m[p+"bc-cci-w16-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w16",form_module:"bc-cci-w16-form", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w16-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w16", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w16-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w16",form_module:"eq-5d-w16-form", task_name:"European Quality of Life" };
    m[p+"eq-5d-w16-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w16", task_name:"European Quality of Life" };

    m[p+"isi-w24-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w24",form_module:"isi-w24-form", task_name:"Insomnia Severity Index" };
    m[p+"isi-w24-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w24", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w24-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w24",form_module:"psqi-w24-form", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w24-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w24", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"phq-w24-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w24",form_module:"phq-w24-form", task_name:"Patient Health Questionnaire" };
    m[p+"phq-w24-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w24", task_name:"Patient Health Questionnaire" };
    m[p+"gad7-w24-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w24",form_module:"gad7-w24-form", task_name:"Generalized Anxiety Disorder" };
    m[p+"gad7-w24-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w24", task_name:"Generalized Anxiety Disorder" };
    m[p+"ffs-w24-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w24",form_module:"ffs-w24-form", task_name:"Flinders Fatigue Scale" };
    m[p+"ffs-w24-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w24", task_name:"Flinders Fatigue Scale" };
    m[p+"ess-w24-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w24",form_module:"ess-w24-form", task_name:"Epworth Sleepiness Scale" };
    m[p+"ess-w24-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w24", task_name:"Epworth Sleepiness Scale" };
    m[p+"bc-cci-w24-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w24",form_module:"bc-cci-w24-form", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w24-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w24", task_name:"British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w24-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w24",form_module:"eq-5d-w24-form", task_name:"European Quality of Life" };
    m[p+"eq-5d-w24-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w24", task_name:"European Quality of Life" };

    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
