n= int(input("Entrez un nombre de notes à saisir:"))
i=1
for i in range(n+1):
    note = (int(input("Entrez la " + str(i) + "ème note:")))
print("moyenne des notes" + str(note/n))

