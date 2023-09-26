/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package seliniumpractise;

/**
 *
 * @author Admin
 */


import org.openqa.selenium.By;
 import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class SeliniumPractise {

    /**
     * @param args the command line arguments
     */
     private static WebDriver driver = null;
    public static void main(String[] args) throws InterruptedException {
        // TODO code application logic here
      System.setProperty("webdriver.chrome.driver", "C:/Users/Admin/Desktop/chromedriver-win64/chromedriver.exe");
  driver = new ChromeDriver();
   
  driver.get("http://localhost:3000/");
    
   System.out.println(driver.getTitle());
     
     driver.manage().window().maximize();
     System.out.println(driver.getTitle());
     Thread.sleep(3000);
     
     // find input text by using xpath 
     WebElement todoTextInput = driver.findElement(By.xpath("//input[@placeholder='Todo Text']"));
      
        // Enter todo 
        String nameToAdd = "Your Testing react application";
        Thread.sleep(3000);
        todoTextInput.sendKeys(nameToAdd);

        // Find the checkbox 
        WebElement isCompletedCheckbox = driver.findElement(By.xpath("//input[@type='checkbox']"));

        
        isCompletedCheckbox.click();
        Thread.sleep(3000);

        // Find the creat todo  button and click it 
        WebElement createTodoButton = driver.findElement(By.xpath("//button[text()='Create Todo']"));
        createTodoButton.click();
  
     
    }
    
}
