package lt.codeacademy;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * @author tsimonavicius
 */
public class Application {

    public static void main(String[] args) {
        simpleDIexample();
        springDIExample();
    }

    private static void simpleDIexample() {
        StudentService studentService = new StudentService(new InternalMarksDao());

        System.out.println("----------------------------- " + studentService.avarrage());
    }

    private static void springDIExample() {
        ApplicationContext context = new AnnotationConfigApplicationContext(DIConfiguration.class);
        StudentService studentService = context.getBean(StudentService.class);

        System.out.println("----------------------------- " + studentService.avarrage());
    }

}
