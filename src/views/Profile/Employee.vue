<template>
    <div class="page-wrapper p-4">
        <div class="accordion" id="accordion"> 
            <div class="accordion-item">
                <h2 class="accordion-header " id="headingBasicInfo">
                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseBasicInfo" aria-expanded="false" aria-controls="collapseBasicInfo">
                        Basic Information
                    </button>
                </h2>
                <div id="collapseBasicInfo" class="accordion-collapse collapse" aria-labelledby="headingBasicInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <BasicInfo />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingWorkInformation">
                    <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkInformation" aria-expanded="false" aria-controls="collapseWorkInformation">
                        Work Information
                    </button>
                </h2>
                <div id="collapseWorkInformation" class="accordion-collapse collapse" aria-labelledby="headingWorkInformation"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <WorkInfo />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingWorkSchedule">
                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkSchedule" aria-expanded="false" aria-controls="collapseWorkSchedule">
                        Work Schedule
                    </button>
                </h2>
                <div id="collapseWorkSchedule" class="accordion-collapse collapse" aria-labelledby="headingWorkSchedule"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <WorkSchedule />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingGovermentInfo">
                    <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseGovermentInfo" aria-expanded="false" aria-controls="collapseGovermentInfo">
                        Goverment Information
                    </button>
                </h2>
                <div id="collapseGovermentInfo" class="accordion-collapse collapse" aria-labelledby="headingGovermentInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <GovermentInfo />
                    </div>
                </div>
            </div> 
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingEducational">
                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEducational" aria-expanded="false" aria-controls="collapseEducational">
                        Goverment Information
                    </button>
                </h2>
                <div id="collapseEducational" class="accordion-collapse collapse" aria-labelledby="headingEducational"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <EducationBackground />
                    </div>
                </div>
            </div> 
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingPerformance">
                    <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsePerformance" aria-expanded="false" aria-controls="collapsePerformance">
                        Performance Management
                    </button>
                </h2>
                <div id="collapsePerformance" class="accordion-collapse collapse" aria-labelledby="headingPerformance"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <PerformanceManagement />
                    </div>
                </div>
            </div> 
              
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingContactInfo">
                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseContactInfo" aria-expanded="false" aria-controls="collapseContactInfo">
                        Contact Information
                    </button>
                </h2>
                <div id="collapseContactInfo" class="accordion-collapse collapse" aria-labelledby="headingContactInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ContactInfo />
                    </div>
                </div>
            </div>  
                            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingLeave">
                    <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseLeave" aria-expanded="false" aria-controls="collapseLeave">
                        Leave Plans and Usage
                    </button>
                </h2>
                <div id="collapseLeave" class="accordion-collapse collapse" aria-labelledby="headingLeave"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <LeavesPlanAndUsage />
                    </div>
                </div>
            </div>  
                                         
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingMemo">
                    <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseMemo" aria-expanded="false" aria-controls="collapseMemo">
                        Memo
                    </button>
                </h2>
                <div id="collapseMemo" class="accordion-collapse collapse" aria-labelledby="headingMemo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Memo />
                    </div>
                </div>
            </div>  
                                                      
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingDocuments">
                    <button class="accordion-button collapsed bg-secondary text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseDocuments" aria-expanded="false" aria-controls="collapseDocuments">
                        Documents
                    </button>
                </h2>
                <div id="collapseDocuments" class="accordion-collapse collapse" aria-labelledby="headingDocuments"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Documents />
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
import BasicInfo from '../../components/Employee/BasicInfo.vue'
import WorkInfo from '../../components/Employee/WorkInfo.vue'
import WorkSchedule from '../../components/Employee/WorkSchedule.vue'
import GovermentInfo from '../../components/Employee/GovermentInfo.vue'
import EducationBackground from '../../components/Employee/EducationBackground.vue'
import PerformanceManagement from '../../components/Employee/PerformanceManagement.vue'
import ContactInfo from '../../components/Employee/ContactInfo.vue'
import LeavesPlanAndUsage from '../../components/Employee/LeavesPlanAndUsage.vue'
import Memo from '../../components/Employee/Memo.vue'
import Documents from '../../components/Employee/Documents.vue'

// const BasicInfo = () => import('../../components/Employee/BasicInfo.vue')
export default {
    components: {
        BasicInfo,
        WorkInfo,
        WorkSchedule,
        GovermentInfo,
        EducationBackground,
        PerformanceManagement,
        ContactInfo,
        LeavesPlanAndUsage,
        Memo,
        Documents

    },
};
</script>
<style>  .accordion>.accordion-header .accordion-button {
      background-color: blue !important;
      color: white;
  }
</style>