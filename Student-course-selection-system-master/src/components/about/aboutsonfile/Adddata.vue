<template>
    <div id="Adddata">
        <div class="LoginForm">
            <Divider>筛选信息</Divider>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160" hide-required-mark
                  label-colon="：">

                <FormItem label="Student_ID" prop="ID">
                    <Input v-model="formValidate.name" placeholder="Enter student ID" autocomplete maxlength="1"
                           show-word-limit/>
                </FormItem>

                <FormItem label="Semester" prop="Semester">
                    <Input v-model="formValidate.password" placeholder="Enter course semester" autocomplete maxlength="1"
                           show-word-limit/>
                </FormItem>

                <FormItem>
                    <Button type="info" @click="handleSubmit('formValidate')">提交</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
    </div>

</template>
<script>
  import axios from "axios";

  export default {
    name: "Adddata",
    props: ["user"],
    inject: ["reload"],
    data() {
      return {
        formValidate: {
          ID: 1,
          Semester: 5,
          identity: ""
        },
        name: ""
      };
    },
    
    mounted() {
      // this.formValidate.number = this.user.ano
      // this.formValidate.name = this.user.loginname
      // this.formValidate.password = this.user.pwd
      console.log("xxx");
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {

            this.getHomeInfo(this.formValidate.ID, this.formValidate.Semester, this.formValidate.identity);


          } else {
            this.$Message.error("Fail!");
          }
        });
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      getHomeInfo(ano, name, pwd, identity) {
	  console.log("2");
        let obj = {
          ano: ano,
          name: name,
          password: pwd,
          identity: identity
        };

        console.log(obj);

        axios.post("/api/tuijian")
          .then((res) => this.getHomeInfoSucc(res));
      },
      getHomeInfoSucc(res) {
	  console.log("3");
        if (res.data.message === "OK") {
          this.$Message.success("提交成功!");
          this.$emit("my-event", this.formValidate.name);
          this.reload();
        }

      }
    }
  };
</script>

<style lang="scss" scoped>
    .LoginForm {
        padding: 11px;
        max-width: 400px;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: 41%;
        transform: translate(-50%, -50%);
    }

    .center {
        text-align: center;
    }


    .ivu-input[disabled], fieldset[disabled] .ivu-input {
        text-align: center !important;
    }

</style>
