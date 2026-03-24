nums = []
i=1
n= int(input("Entrez un nombre de notes à saisir:"))
for i in range(n):
    nums.append(int(input("Entrez la " + str(i+1) + "ème note:")))
print("moyenne des notes " + str(sum(nums)/n))

print("Félicitations pour la pastille verte")