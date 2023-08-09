<template>
    <div class="container page-wrapper p-4">
        <h6 class="mb-4 text-uppercase">Employee Information</h6>
        <div class="accordion" id="accordion">
            <div class="accordion-item ">
                <h2 class="accordion-header " id="headingBasicInfo">
                    <button class="accordion-button collapsed topbar" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseBasicInfo" aria-expanded="false" aria-controls="collapseBasicInfo">
                        Basic Information
                    </button>
                </h2>
                <div id="collapseBasicInfo" class="accordion-collapse collapse" aria-labelledby="headingBasicInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <BasicInfo ref="refBasicInfo" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingWorkInformation">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkInformation" aria-expanded="false"
                        aria-controls="collapseWorkInformation">
                        Work Information
                    </button>
                </h2>
                <div id="collapseWorkInformation" class="accordion-collapse collapse"
                    aria-labelledby="headingWorkInformation" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <WorkInfo ref="refWorkInfo" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingWorkSchedule">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkSchedule" aria-expanded="false" aria-controls="collapseWorkSchedule">
                        Work History
                    </button>
                </h2>
                <div id="collapseWorkSchedule" class="accordion-collapse collapse" aria-labelledby="headingWorkSchedule"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <WorkHistory ref="refWorkHistory" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingWorkSchedule">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkSchedule" aria-expanded="false" aria-controls="collapseWorkSchedule">
                        Work Schedule
                    </button>
                </h2>
                <div id="collapseWorkSchedule" class="accordion-collapse collapse" aria-labelledby="headingWorkSchedule"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <WorkSchedule ref="refWorkSchedule" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingGovermentInfo">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseGovermentInfo" aria-expanded="false" aria-controls="collapseGovermentInfo">
                        Goverment Information
                    </button>
                </h2>
                <div id="collapseGovermentInfo" class="accordion-collapse collapse" aria-labelledby="headingGovermentInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <GovermentInfo ref="refGovermentInfo" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingCertificatesTraining">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseCertificatesTraining" aria-expanded="false" aria-controls="collapseCertificatesTraining">
                        CertificatesTraining / Training
                    </button>
                </h2>
                <div id="collapseCertificatesTraining" class="accordion-collapse collapse" aria-labelledby="headingCertificatesTraining"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <CertificatesTraining ref="refCertificatesTraining" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingEducational">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEducational" aria-expanded="false" aria-controls="collapseEducational">
                        Educational Background
                    </button>
                </h2>
                <div id="collapseEducational" class="accordion-collapse collapse" aria-labelledby="headingEducational"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <EducationBackground ref="refEducationBackground" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingPerformance">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsePerformance" aria-expanded="false" aria-controls="collapsePerformance">
                        Performance Management
                    </button>
                </h2>
                <div id="collapsePerformance" class="accordion-collapse collapse" aria-labelledby="headingPerformance"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <PerformanceManagement ref="refPerformanceManagement" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingContactInfo">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseContactInfo" aria-expanded="false" aria-controls="collapseContactInfo">
                        Contact Information
                    </button>
                </h2>
                <div id="collapseContactInfo" class="accordion-collapse collapse" aria-labelledby="headingContactInfo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ContactInfo ref="refContactInfo" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingLeave">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseLeave" aria-expanded="false" aria-controls="collapseLeave">
                        Leave Plans and Usage
                    </button>
                </h2>
                <div id="collapseLeave" class="accordion-collapse collapse" aria-labelledby="headingLeave"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <LeavesPlanAndUsage ref="refLeavesPlanAndUsage" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingMemo">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseMemo" aria-expanded="false" aria-controls="collapseMemo">
                        Memo
                    </button>
                </h2>
                <div id="collapseMemo" class="accordion-collapse collapse" aria-labelledby="headingMemo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Memo ref="refMemo" />
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingDocuments">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseDocuments" aria-expanded="false" aria-controls="collapseDocuments">
                        Documents
                    </button>
                </h2>
                <div id="collapseDocuments" class="accordion-collapse collapse" aria-labelledby="headingDocuments"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Documents ref="refDocuments" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingDocuments">
                    <button class="accordion-button collapsed topbar text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseDocuments" aria-expanded="false" aria-controls="collapseDocuments">
                        System Administrator
                    </button>
                </h2>
                <div id="collapseDocuments" class="accordion-collapse collapse" aria-labelledby="headingDocuments"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <Documents ref="refSysAdmin" />
                    </div>
                </div>
            </div>
            <div class="fixed-bottom d-flex justify-content-around bg-white p-1 text-center align-items-center">
                <a class="h6" href="#" @click="this.$router.push('/Employee/list')">BACK TO SEARCH</a>
                <button class="btn btn-primary ml-4" @click="handleSave()">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>

// COMPONENTS

import Memo from '../../../components/Employee/Memo.vue'
import WorkHistory from '../../../components/Employee/WorkHistory.vue'
import BasicInfo from '../../../components/Employee/BasicInfo.vue'
import WorkInfo from '../../../components/Employee/WorkInfo.vue'
import WorkSchedule from '../../../components/Employee/WorkSchedule.vue'
import GovermentInfo from '../../../components/Employee/GovermentInfo.vue'
import EducationBackground from '../../../components/Employee/EducationBackground.vue'
import CertificatesTraining from '../../../components/Employee/CertificatesTraining.vue'
import PerformanceManagement from '../../../components/Employee/PerformanceManagement.vue'
import ContactInfo from '../../../components/Employee/ContactInfo.vue'
import LeavesPlanAndUsage from '../../../components/Employee/LeavesPlanAndUsage.vue'

// import Documents from '../../../components/Employee/Documents.vue'
import { ref } from "vue";
// const BasicInfo = () => import('../../components/Employee/BasicInfo.vue')
export default {
    name: 'create',
    components: {
        BasicInfo,
        WorkInfo,
        WorkSchedule,
        GovermentInfo,
        EducationBackground,
        CertificatesTraining,
        PerformanceManagement,
        ContactInfo,
        LeavesPlanAndUsage,
        Memo,
        WorkHistory
        // Documents

    },
    setup() {
        const refBasicInfo = ref(null);
        const refWorkInfo = ref(null);
        const refWorkSchedule = ref(null);
        const refGovermentInfo = ref(null); 
        const refEducationBackground = ref(null); 
        const refCertificatesTraining = ref(null);  
        const refPerformanceManagement = ref(null); 
        const refContactInfo = ref(null); 
        const refLeavesPlanAndUsage = ref(null); 
        const refMemo = ref(null); 
        const refDocuments = ref(null); 
        const refSysAdmin = ref(null); 
        const refWorkHistory = ref(null); 

    },
    methods: {
        async handleSave() {
            const parentId = await this.$refs.refBasicInfo.handleSave()   
            await this.$refs.refWorkInfo.handleSave(parentId) 
            await this.$refs.refGovermentInfo.handleSave(parentId) 
            await this.$refs.refWorkSchedule.handleSave(parentId) 
            await this.$refs.refEducationBackground.handleSave(parentId) 
            await this.$refs.refCertificatesTraining.handleSave(parentId) 
            await this.$refs.refLeavesPlanAndUsage.handleSave(parentId) 
            
            alert('success')
            // reset selected record
            // this.$store.commit('setRecordId',0) 
            // this.$router.push('/Employee/list')
        }
    }
};
</script>
<style scoped>  .accordion>.accordion-header .accordion-button {
      background-color: blue !important;
      color: white;
  }

  .topbar {
      z-index: 1;
      color: #595959 !important;
  }
</style>