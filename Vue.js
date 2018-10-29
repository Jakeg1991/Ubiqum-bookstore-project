window.onload = fetch

fetch("https://api.myjson.com/bins/udbm5", {
        method: 'GET',
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        createBookGrid(data)
    })


function createBookGrid(data) {

    var bookGrid = new Vue({
        el: "#bookVue",
        data: {
            books: data

        },
        beforeCreate: console.log("Vue is being created"),
        created: console.log(data),
        created: console.log("Vue has been created"),
    })
}









//        created() {
//            this.populateStateList()
//        },
//        methods: {
//            populateStateList: function () {
//                var uniqueStates = []
//                for (i = 0; i < this.members.length; i++) {
//                    if (uniqueStates.includes(this.members[i].state)) {} else {
//                        uniqueStates.push(this.members[i].state)
//                    }
//                }
//                this.stateDropdown = uniqueStates.sort()
//            }
//        },
//        computed: {
//            checkboxFilter: function () {
//                var selectedParty = []
//                for (i = 0; i < this.members.length; i++)
//                    if ((this.partyCheckBox.includes(this.members[i].party) || this.partyCheckBox.length < 1) &&
//                        (this.selectedState.includes(this.members[i].state) ||
//                            this.selectedState == "all")) {
//                        selectedParty.push(this.members[i])
//                    }
//
//                return selectedParty
//            }
//        }
//    })
//}
