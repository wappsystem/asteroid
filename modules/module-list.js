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

    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"demo-asteroid-partb-participant"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            /*questionnaire_setup:"online-questionnaire-setup-canact",*/
                            online_questionnaire:"online-questionnaire"
                            
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"demo-asteroid-partb-participant"},
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
    m[p+"isi-bl-data"]      ={url:H+"/form-grid/questionnaires/isi-bl-data.html",Table:"demo-asteroid-partb-screening",form_module:"isi-bl-form", task_name:"Baseline - Insomnia Severity Index" };
    m[p+"isi-bl-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"demo-asteroid-partb-screening", task_name:"Baseline - Insomnia Severity Index" };
*/
    m[p+"psqi-bl-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"demo-asteroid-partb-psqi-bl",form_module:"psqi-bl-form", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-bl-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"demo-asteroid-partb-psqi-bl", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"phq-bl-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"demo-asteroid-partb-phq-bl",form_module:"phq-bl-form", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"phq-bl-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"demo-asteroid-partb-phq-bl", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"gad7-bl-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"demo-asteroid-partb-gad7-bl",form_module:"gad7-bl-form", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"gad7-bl-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"demo-asteroid-partb-gad7-bl", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"ffs-bl-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"demo-asteroid-partb-ffs-bl",form_module:"ffs-bl-form", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ffs-bl-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"demo-asteroid-partb-ffs-bl", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ess-bl-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"demo-asteroid-partb-ess-bl",form_module:"ess-bl-form", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"ess-bl-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"demo-asteroid-partb-ess-bl", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"bc-cci-bl-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"demo-asteroid-partb-bc-cci-bl",form_module:"bc-cci-bl-form", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-bl-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"demo-asteroid-partb-bc-cci-bl", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-bl-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"demo-asteroid-partb-eq-5d-bl",form_module:"eq-5d-bl-form", task_name:"Baseline - European Quality of Life" };
    m[p+"eq-5d-bl-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"demo-asteroid-partb-eq-5d-bl", task_name:"Baseline - European Quality of Life" };
    m[p+"eheals-bl-data"]      ={url:H+"/form-grid/questionnaires/eheals-data.html",Table:"demo-asteroid-partb-eheals-bl",form_module:"eheals-bl-form", task_name:"Baseline - eHealth Literacy Scale" };
    m[p+"eheals-bl-form"]      ={url:H+"/form-grid/questionnaires/eheals-form.html",Table:"demo-asteroid-partb-eheals-bl", task_name:"Baseline - eHealth Literacy Scale" };

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
    
    m[p+"registration-data"]      ={url:H+"/form-grid/screening/registration-data.html",   Table:"demo-asteroid-partb-participant",form_module:"registration-form",task_name:"Participant"};
    m[p+"registration-form"]      ={url:H+"/form-grid/screening/registration-form.html",Table:"demo-asteroid-partb-participant",Table2:"demo-asteroid-partb-screening", task_name:"Participant" };
    
    m[p+"progress-report"]      ={url:H+"/form-grid/backend/progress-data.html",   Table:"demo-asteroid-partb-login",task_name:"Progress report"};
    m[p+"progress-data"]      ={url:H+"/form-grid/backend/progress-data.html",   Table:"demo-asteroid-partb-progress",task_name:"Progress Grid"};
    m[p+"randomisation-check-data"]      ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"demo-asteroid-partb-progress",task_name:"Randomisation Check"};
    m[p+"progress-new-form"]      ={url:H+"/form-grid/backend/progress-new-form.html",   Table:"demo-asteroid-partb-progress",task_name:"Progress form"};
    m[p+"progress-mod-form"]      ={url:H+"/form-grid/backend/progress-mod-form.html",   Table:"demo-asteroid-partb-progress",task_name:"Progress form"};
 
    m[p+"start-date"]      ={url:H+"/form-grid/backend/date-start-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Start Date"};
    m[p+"reminder-1-date"]      ={url:H+"/form-grid/backend/date-reminder-1-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Access Code Reminder 1 Date"};
    m[p+"reminder-2-date"]      ={url:H+"/form-grid/backend/date-reminder-2-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Access Code Reminder 2 Date"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"demo-asteroid-partb-progress"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"demo-asteroid-partb-screening", task_name:"send email"};
    m[p+"fitbit-sent-date"]      ={url:H+"/form-grid/backend/fitbit-sent-form.html",   Table:"demo-asteroid-partb-contact", task_name:"Fitbit Sent"};

    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
