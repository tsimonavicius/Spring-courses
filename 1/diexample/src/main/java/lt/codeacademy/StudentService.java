package lt.codeacademy;

import org.springframework.stereotype.Service;

/**
 * @author tsimonavicius
 */
@Service
public class StudentService {

    private MarksDao marksDao;

    public StudentService(MarksDao marksDao) {
        this.marksDao = marksDao;
    }

    public Double avarrage() {
        return marksDao.getMarks()
                .stream()
                .mapToInt(i -> i)
                .average()
                .orElse(0);
    }
}
