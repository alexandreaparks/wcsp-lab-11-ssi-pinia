import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// define store takes the name of the store and a function that has data the store uses
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        { name: 'Alexandrea Parks', starID: 'yy2888bl', present: false },
        { name: 'Austin Daly', starID: 'uh2654gd', present: false },
    ])

    const mostRecentStudent = ref( {} )  // empty object

    // can also store functions in pinia store to be used by all components
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete !== student  // filters list to only include students that are not equal to studentToDelete
        })
    }


    return {  // return all variable/function names
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent
    }

})

