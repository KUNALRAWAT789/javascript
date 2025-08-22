# javascript
javascript code repo

JAVA EXECUTION CONTEXT 
# Global Execution Context //first thing that is created when a program is executed and a this variable is refered to it

# Function Execution Context
# Eval Execution Context

// A javascript program runs in two phases

1# Memory Creation Phase / Creation Phase  
// memory is allocated to the variables taht are declared.
2# Execution Phase 

#HOW a program is Executed
step 1: Global execution Context / Environment and is allocated to this
step 2: Memory Phase :- all the variables are created and assigned undefined values. functions are assigned function definitions
step 3: Execution Phase :- values are assigned to the variables
// functions on the otherhand create a Function Execution Context (New variable Environment + Execution Thread)
// Both the Memory Phase and Execution Phase are Executed for the function Every time it is called
// The output after the execution of the function is sent to the Global Execution Context and The executional context gets Deleted

# CALL STACK
//call stack is a stack that stores method (Execution context) even nested methods (First being the Global Execution Context) and follows the Lifo rule.
