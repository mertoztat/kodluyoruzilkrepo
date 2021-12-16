# 1. [22,27,16,2,18,6] -> Insertion Sort / Verilen dizinin sort türüne göre aşamalarını yazınız.
    
    1.[22,27|16,2,18,6] -> n [Bu adımda 27 22 den büyük olduğu için işlem yapılmaz]
    2.[16,22,27|2,18,6] -> n-1
    3.[2,16,22,27|18,6] -> n-2
    4.[2,16,18,22,27|6] -> n-3
    5.[2,6,16,18,22,27] -> n-4
     
# 2. Big-O: O(n^2)

# 3. Time Complexity:
  
  -Average case: Aradığımız sayının ortada olması <br>
  -Worst case: Aradığımız sayının sonda olması <br>
  -Best case: Aradığımız sayının dizinin en başında olması

# 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?

  18 Sayısı Average case kapsamına girer

# 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
  1.[3,7|5,8,2,9,4,15,6] <br>
  2.[3,5,7|8,2,9,4,15,6] <br>
  3.[3,5,7,8|2,9,4,15,6] [Bu adımda 8 7 den büyük olduğu için işlem yapılmaz] <br>
  4.[2,3,5,7,8|9,4,15,6]
