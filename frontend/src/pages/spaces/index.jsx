
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
const ListSpaces = () => {
    const [Spaces, setSpaces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const getSpaces = async () => {
      try {
        const { data } = await axiosService.get("/Spaces");
        return data;
      } catch (error) {
        throw (error);
      }
    };
  
   
    useEffect(() => {
      setIsLoading(true);
      getSpaces().then((data) => {
        setSpaces(data.data)
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
                    <th>Address</th>
                    <th>Type</th>
                    <th>Format</th>
                    <th>Ward</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? <Loader />
                    : Spaces.map((ad, index) => (
                      <tr key={index} >
                        <td>
                          <div className="d-flex align-items-center p-2">
                            <div className="">
                              <span className="text-muted">{ad.id}</span>
                            </div>
                          </div>
                        </td>
                        <td>{ad.address}</td>
    
                        <td>{ad.type}</td>
                        <td>{ad.format}</td>
                        <td>{ad.ward}</td>
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

export default ListSpaces;
