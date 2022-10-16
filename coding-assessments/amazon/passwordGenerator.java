import java.util.Random;

public class passwordGenerator {
    public static void main(String[] args){
        System.out.println(generate(12, true));
    }

    public static String generate(Integer len, Boolean special){
        String password = "";
        String charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_";

        //Pick a random number, max number is charset . length
        Random r = new Random();
//        System.out.println(r.nextInt(charset.length()));

        for (int i = 0; i < len; i++){
            password += charset.charAt(r.nextInt(charset.length()));
        }
//        System.out.println(password);
        return password;
    }
}
