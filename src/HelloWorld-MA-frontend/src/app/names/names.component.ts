import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment'
import { createActor } from '../../../../declarations/HelloWorld-MA-backend/';
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  imports: [CommonModule],
  styleUrls: ['./names.component.css']
})

export class NamesComponent implements OnInit {
  public names: string[] = [];

  // Instancia tu actor
  private motokoActor = createActor(environment.MOTOKO_CANISTER_BACKEND_ID, {
    agentOptions: { host: "http://localhost:4943" }
  });

  ngOnInit() {
    // Carga inicial
    this.fetchNames();
  }

  async addName(newName: string) {
    await this.motokoActor.AddName(newName);
    this.fetchNames();
  }

  async fetchNames() {
    this.names = await this.motokoActor.GreetList();
    // Deberías tener this.names con los valores
  }
}