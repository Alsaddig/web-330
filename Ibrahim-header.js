/*
; Title:  header.js
; Author: Alsaddig Ibrahim
; Date:   17 June 2017
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\n'+'Date: ' +
    new Date().toLocaleDateString()

  return output
}

/*
============================================
; Title:  header.js
; Author: Alsaddig Ibrahim
; Date:   25 June 2017
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\n'+'Date: ' +
    new Date().toLocaleDateString()

  return output
}
