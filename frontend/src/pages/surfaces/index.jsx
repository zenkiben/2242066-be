
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Table,
   CardHeader,
  
} from "reactstrap";
import Loader from "../../layouts/loader/Loader";
import { axiosService } from "../../services/axiosServices";
import { json, useNavigate, useParams } from "react-router-dom";

const Listsurfaces = () => {
    const [Surfaces, setSurfaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let { id } = useParams();
    const getSpaces = async () => {
      try {
        const { data } = await axiosService.get(`/surfaces/${id}`);
        return data;
      } catch (error) {
        throw (error);
      }
    };
  
   
    useEffect(() => {
      setIsLoading(true);
      getSpaces().then((data) => {
        setSurfaces(data.data)
        setIsLoading(false);
      });
    }, []);
     
      
      return (
        <div>
         
          <Card>
            <CardHeader>
             
            </CardHeader>
            <CardBody>
            
             
              <Table  responsive bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Format</th>
                    <th>Size</th>
                    <th>Amount</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? <Loader />
                    : Surfaces.map((ad, index) => (
                      <tr key={index} >
                        <td>
                          <div className="d-flex align-items-center p-2">
                            <div className="">
                              <span className="text-muted">{ad.id}</span>
                            </div>
                          </div>
                        </td>
                        <td>{ad.format}</td>
    
                        <td>{ad.size}</td>
                       
                        <td className="float-right">
                             <Link to={`/surfaces/${ad.id}`}><Button color="warning" size="sm">View surfaces</Button></Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      );

}

export default Listsurfaces;
