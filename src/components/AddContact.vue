<template>
    <div>
        <h1 style="margin-left: 50px">Add Contact</h1>
    </div>
    <Header/>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>
                <form @submit.prevent="saveContact" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Name</label>
                            <input type="text" class="form-control" v-model="contact.name"
                                   placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" v-model="contact.email"
                                   placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Designation</label>
                            <input type="text" class="form-control" v-model="contact.designation"
                                   placeholder="Enter designation">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Enter Contact No</label>
                            <input type="text" class="form-control" v-model="contact.contact_no"
                                   placeholder="Enter Contact No">
                        </div>
                        <button class="btn btn-secondary mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'addContact',
        data() {
          return {
              contact: {},
              name: '',
              email: '',
              designation: '',
              contact_no: '',
              errors: []
          }
        },
        methods: {
            async saveContact() {
                this.errors = [];
                if(!this.contact.name) {
                    this.errors.push("Name is required")
                }
                if(!this.contact.email) {
                    this.errors.push("Email is required")
                }
                if(!this.contact.designation) {
                    this.errors.push("designation is required")
                }
                if(!this.contact.contact_no) {
                    this.errors.push("Contact No. is required")
                }
                if(!this.errors.length) {
                    let formData = new FormData();
                    formData.append('name', this.contact.name);
                    formData.append('email', this.contact.email);
                    formData.append('designation', this.contact.designation);
                    formData.append('contact_no', this.contact.contact_no);
                    let url ='http://127.0.0.1:8000/api/add_contact';
                    await axios.post(url, formData).then((response) => {
                        console.log(response);
                        if(response.status == 200 ) {
                            this.contact.name = '';
                            this.contact.email = '';
                            this.contact.designation = '';
                            this.contact.contact_no = '';
                            alert(response.data.message);
                        }else {
                            console.log('error');

                        }
                    }).catch(error => {
                        this.errors.push(error.response);
                    });
                }
            }
        }
    }
</script>

<style>

</style>
