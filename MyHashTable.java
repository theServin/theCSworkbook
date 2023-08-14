/**
 * Implementation of Hash Table using Separate Chaining
 * @author Prof. Servin
 **/
public class MyHashTable{
  MyLinkedList[] ht;     // represents hashtable
  int tableSize = 11;    // size of the hash table
  // constructor
  public MyHashTable(){
    tableSize = 11;
    ht = new MyLinkedList[tableSize];
    for(int i = 0; i < ht.length; i++)
      ht[i] = new MyLinkedList();
  }
  /**
   * Stores String v at position p in the hash table
   *@param p an int representing the position to add value v
   *@param v a String that will be store at table at position p
   **/
  public void put(int p, String v){
    ht[p].add(v);
  }
  /**
   * Print method
   **/
  public void print(){
    for(int i = 0; i < ht.length; i++)
      System.out.println("["+i+"]"+ht[i]);
  }
  // basic main that will demonstrate hash table
  public static void main(String [] args){
    MyHashTable table = new MyHashTable();
    table.put(3,"hello");
    table.put(1,"java");
    table.put(3,"EPCC");
    table.print();
  }
}