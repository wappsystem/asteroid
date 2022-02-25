(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"not_elig1"]         ={url:H+"/form-grid/screening/not_elig1.html"},
    m[p+"not_eligphq9"]         ={url:H+"/form-grid/screening/not_eligphq9.html"},
    m[p+"not_elig2"]         ={url:H+"/form-grid/screening/not_elig2.html"},
    m[p+"not_elig3"]         ={url:H+"/form-grid/screening/not_elig3.html"},

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

    m[p+"adverse-event-data"] ={url:H+"/form-grid/unscheduled/adverse-event-data.html",Table:"demo-asteroid-partb-adverse-event",form_module:"adverse-event-form", task_name:"Adverse event" };
    m[p+"adverse-event-form"] ={url:H+"/form-grid/unscheduled/adverse-event-form.html",Table:"demo-asteroid-partb-adverse-event", task_name:"Adverse event" };

    
    m[p+"demographic-data"] ={url:H+"/form-grid/questionnaires/demographic-data.html",Table:"demo-asteroid-partb-demographic",form_module:"demographic-form", task_name:"Baseline Demographics" };
    m[p+"demographic-form"] ={url:H+"/form-grid/questionnaires/demographic-form.html",Table:"demo-asteroid-partb-demographic", task_name:"Baseline - Demographics" };
/*  
    m[p+"isi-w0-data"]      ={url:H+"/form-grid/questionnaires/isi-w0-data.html",Table:"demo-asteroid-partb-screening",form_module:"isi-w0-form", task_name:"Baseline - Insomnia Severity Index" };
    m[p+"isi-w0-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-screening", task_name:"Baseline - Insomnia Severity Index" };
*/
    m[p+"psqi-w0-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w0",form_module:"psqi-w0-form", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w0-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w0", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"phq-w0-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w0",form_module:"phq-w0-form", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"phq-w0-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w0", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"gad7-w0-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w0",form_module:"gad7-w0-form", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"gad7-w0-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w0", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"ffs-w0-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w0",form_module:"ffs-w0-form", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ffs-w0-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w0", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ess-w0-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w0",form_module:"ess-w0-form", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"ess-w0-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w0", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"bc-cci-w0-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w0",form_module:"bc-cci-w0-form", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w0-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w0", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w0-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w0",form_module:"eq-5d-w0-form", task_name:"Baseline - European Quality of Life" };
    m[p+"eq-5d-w0-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w0", task_name:"Baseline - European Quality of Life" };
    m[p+"eheals-w0-data"]      ={url:H+"/form-grid/questionnaires/eheals-data.html",Table:"demo-asteroid-partb-eheals-w0",form_module:"eheals-w0-form", task_name:"Baseline - eHealth Literacy Scale" };
    m[p+"eheals-w0-form"]      ={url:H+"/form-grid/questionnaires/eheals-form.html",Table:"demo-asteroid-partb-eheals-w0", task_name:"Baseline - eHealth Literacy Scale" };

    m[p+"adverse-event-w3-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"demo-asteroid-partb-adverse-event-w3",form_module:"adverse-event-w3-form", task_name:"Week 3 - Adverse Event Check-in" };
    m[p+"adverse-event-w3-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"demo-asteroid-partb-adverse-event-w3", task_name:"Week 3 - Adverse Event Check-in" };

    m[p+"isi-w8-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w8",form_module:"isi-w8-form", task_name:"Week 8 - Insomnia Severity Index" };
    m[p+"isi-w8-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w8", task_name:"Week 8 - Insomnia Severity Index" };
    m[p+"psqi-w8-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w8",form_module:"psqi-w8-form", task_name:"Week 8 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w8-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w8", task_name:"Week 8 - Pittsburgh Sleep Quality Index" };
    m[p+"phq-w8-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w8",form_module:"phq-w8-form", task_name:"Week 8 - Patient Health Questionnaire" };
    m[p+"phq-w8-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w8", task_name:"Week 8 - Patient Health Questionnaire" };
    m[p+"gad7-w8-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w8",form_module:"gad7-w8-form", task_name:"Week 8 - Generalized Anxiety Disorder" };
    m[p+"gad7-w8-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w8", task_name:"Week 8 - Generalized Anxiety Disorder" };
    m[p+"ffs-w8-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w8",form_module:"ffs-w8-form", task_name:"Week 8 - Flinders Fatigue Scale" };
    m[p+"ffs-w8-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w8", task_name:"Week 8 - Flinders Fatigue Scale" };
    m[p+"ess-w8-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w8",form_module:"ess-w8-form", task_name:"Week 8 - Epworth Sleepiness Scale" };
    m[p+"ess-w8-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w8", task_name:"Week 8 - Epworth Sleepiness Scale" };
    m[p+"bc-cci-w8-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w8",form_module:"bc-cci-w8-form", task_name:"Week 8 - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w8-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w8", task_name:"Week 8 - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w8-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w8",form_module:"eq-5d-w8-form", task_name:"Week 8 - European Quality of Life" };
    m[p+"eq-5d-w8-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w8", task_name:"Week 8 - European Quality of Life" };
    m[p+"adverse-event-w8-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"demo-asteroid-partb-adverse-event-w8",form_module:"adverse-event-w3-form", task_name:"Week 8 - Adverse Event Check-in" };
    m[p+"adverse-event-w8-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"demo-asteroid-partb-adverse-event-w8", task_name:"Week 8 - Adverse Event Check-in" };

    m[p+"isi-w16-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w16",form_module:"isi-w16-form", task_name:"Week 16 - Insomnia Severity Index" };
    m[p+"isi-w16-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w16", task_name:"Week 16 - Insomnia Severity Index" };
    m[p+"psqi-w16-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w16",form_module:"psqi-w16-form", task_name:"Week 16 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w16-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w16", task_name:"Week 16 - Pittsburgh Sleep Quality Index" };
    m[p+"phq-w16-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w16",form_module:"phq-w16-form", task_name:"Week 16 - Patient Health Questionnaire" };
    m[p+"phq-w16-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w16", task_name:"Week 16 - Patient Health Questionnaire" };
    m[p+"gad7-w16-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w16",form_module:"gad7-w16-form", task_name:"Week 16 - Generalized Anxiety Disorder" };
    m[p+"gad7-w16-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w16", task_name:"Week 16 - Generalized Anxiety Disorder" };
    m[p+"ffs-w16-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w16",form_module:"ffs-w16-form", task_name:"Week 16 - Flinders Fatigue Scale" };
    m[p+"ffs-w16-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w16", task_name:"Week 16 - Flinders Fatigue Scale" };
    m[p+"ess-w16-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w16",form_module:"ess-w16-form", task_name:"Week 16 - Epworth Sleepiness Scale" };
    m[p+"ess-w16-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w16", task_name:"Week 16 - Epworth Sleepiness Scale" };
    m[p+"bc-cci-w16-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w16",form_module:"bc-cci-w16-form", task_name:"Week 16 - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w16-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w16", task_name:"Week 16 - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w16-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w16",form_module:"eq-5d-w16-form", task_name:"Week 16 - European Quality of Life" };
    m[p+"eq-5d-w16-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w16", task_name:"Week 16 - European Quality of Life" };

    m[p+"isi-w26-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"demo-asteroid-partb-isi-w26",form_module:"isi-w26-form", task_name:"Week 26 - Insomnia Severity Index" };
    m[p+"isi-w26-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-isi-w26", task_name:"Week 26 - Insomnia Severity Index" };
    m[p+"psqi-w26-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-w26",form_module:"psqi-w26-form", task_name:"Week 26 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w26-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-w26", task_name:"Week 26 - Pittsburgh Sleep Quality Index" };
    m[p+"phq-w26-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-w26",form_module:"phq-w26-form", task_name:"Week 26 - Patient Health Questionnaire" };
    m[p+"phq-w26-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-w26", task_name:"Week 26 - Patient Health Questionnaire" };
    m[p+"gad7-w26-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-w26",form_module:"gad7-w26-form", task_name:"Week 26 - Generalized Anxiety Disorder" };
    m[p+"gad7-w26-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-w26", task_name:"Week 26 - Generalized Anxiety Disorder" };
    m[p+"ffs-w26-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-w26",form_module:"ffs-w26-form", task_name:"Week 26 - Flinders Fatigue Scale" };
    m[p+"ffs-w26-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-w26", task_name:"Week 26 - Flinders Fatigue Scale" };
    m[p+"ess-w26-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-w26",form_module:"ess-w26-form", task_name:"Week 26 - Epworth Sleepiness Scale" };
    m[p+"ess-w26-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-w26", task_name:"Week 26 - Epworth Sleepiness Scale" };
    m[p+"bc-cci-w26-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-w26",form_module:"bc-cci-w26-form", task_name:"Week 26 - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w26-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-w26", task_name:"Week 26 - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w26-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-w26",form_module:"eq-5d-w26-form", task_name:"Week 26 - European Quality of Life" };
    m[p+"eq-5d-w26-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-w26", task_name:"Week 26 - European Quality of Life" };

    m[p+"randomisation-table-data"]      ={url:H+"/form-grid/backend/randomisation-table-data.html",   Table:"demo-asteroid-partb-randomisation",form_module:"randomisation-table-form",task_name:"Randomisation Table"};
    m[p+"randomisation-table-form"]      ={url:H+"/form-grid/backend/randomisation-table-form.html",Table:"demo-asteroid-partb-randomisation", task_name:"Randomisation Table" };
    
    
    m[p+"progress-report"]      ={url:H+"/form-grid/backend/progress-data.html",   Table:"demo-asteroid-partb-login",task_name:"Progress report"};
    m[p+"start-date"]      ={url:H+"/form-grid/backend/date-start-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Start Date"};
    m[p+"reminder-1-date"]      ={url:H+"/form-grid/backend/date-reminder-1-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Access Code Reminder 1 Date"};
    m[p+"reminder-2-date"]      ={url:H+"/form-grid/backend/date-reminder-2-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Access Code Reminder 2 Date"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"demo-asteroid-partb-screening"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"demo-asteroid-partb-screening", task_name:"send email"};
    m[p+"fitbit-sent-date"]      ={url:H+"/form-grid/backend/fitbit-sent-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Fitbit Sent"};

    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
