let inputCount = 0;
 function addGroupMemberName() {
        if (inputCount >= 6) {
        return;
        }
        const groupMemberNames = document.getElementById("group_member_names");
        const input = document.createElement("input");
        input.type = "text";
        input.name = "group_member_names[]";
        groupMemberNames.appendChild(input);
        inputCount++;
        
    }

//Menu Toggle
function openNav() {
    document.getElementById("sidebar-container").style.width = "272px";
   // document.getElementById("main").style.marginLeft = "260px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sidebar-container").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }