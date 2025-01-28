(module
  
  (import "env" "memory" (memory 1))
  ;; importing the array of ascii coded chars from js memory
  
  (func $main)
  ;; iterate through the characters one by one while the character is a number and return the number and the position of the next character
  ;; if the array ends, early return the scanned number
  
  (func $mul)
  ;; multiply the number passed as parameter with the next scanned number by calling $scan
  (func $add)
  ;; add the number passed as parameter to the next scanned number by calling $scan 
  (func $div)
  ;; divide the number passed as parameter by the next scanned number by calling $scan
  (func $sub)
  ;; substract the number passed as parameter from the next scanned number by calling $scan

  (func $shift)
  ;; multiply by 10 the previous number and add the scanned number

  (func $offset)
  ;; calculate address for current array index
  
  (func $incr)
  ;; increment index

  (func $convert)
  ;; convert ascii code to decimal number  
  
  
  )
