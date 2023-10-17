let read_lines file list =
  let in_ch = open_in file in
  let counter : int ref = ref 0 in
  let rec read_line () =
    try
      let line = input_line in_ch in
        match line with
        | "" -> 
            list := !counter :: !list;
            counter := 0;
            read_line()
        | _ ->
          counter := !counter + int_of_string line;
          read_line ();
    with 
    | End_of_file -> ()
  in 
  read_line ();
  close_in in_ch;
;;

let rec print_list list =
  match list with
    | [] -> ()
    | head :: tail ->
        print_endline (string_of_int head);
        print_list tail;;

let find_biggest myList =
  let biggest = ref 0 in
  let rec iterate list =
    match list with
    | [] -> !biggest
    | head :: tail -> 
      biggest := if head > !biggest then head else !biggest;
      iterate tail;
  in 
  iterate myList
;;

let averages: int list ref = ref [];;
read_lines "input.txt" averages;;

let firstBig = find_biggest !averages ;;
averages := List.filter (fun item -> item != firstBig) !averages ;;

let secondBig = find_biggest !averages ;;
averages := List.filter (fun item -> item != secondBig) !averages ;;

let thirdBig = find_biggest !averages ;;
averages := List.filter (fun item -> item != thirdBig) !averages ;;

Printf.printf "Part 2: %d\n" (firstBig + secondBig + thirdBig) ;;
