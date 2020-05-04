package lt.codeacademy;

import java.util.List;

import org.springframework.stereotype.Repository;

/**
 * @author tsimonavicius
 */
@Repository
public class InternalMarksDao implements MarksDao {
    @Override
    public List<Integer> getMarks() {
        return List.of(10, 5, 9, 10);
    }
}
